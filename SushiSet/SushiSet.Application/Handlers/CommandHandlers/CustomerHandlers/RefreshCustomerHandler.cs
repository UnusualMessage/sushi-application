using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CustomerCommands;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CustomerHandlers
{
    public class RefreshCustomerHandler : IRequestHandler<RefreshCustomer, AuthenticateCustomerResponse>
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly ITokenService _tokenService;

        public RefreshCustomerHandler(ICustomerRepository customerRepository, ITokenService tokenService)
        {
            _customerRepository = customerRepository;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateCustomerResponse> Handle(RefreshCustomer request, CancellationToken cancellationToken)
        {
            Customer customer = await _customerRepository.GetCustomerByToken(request.RefreshToken);

            if (customer == null)
            {
                return null;
            }

            RefreshToken refreshToken = customer.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return null;
            }

            RefreshToken newRefreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            customer.RefreshTokens.Add(newRefreshToken);

            _ = await _customerRepository.UpdateAsync(customer);

            AccessToken jwt = _tokenService.GetGeneratedAccessToken(customer);

            return new AuthenticateCustomerResponse()
            {
                Id = customer.Id,
                Name = customer.Name,
                Password = customer.Password,
                RefreshToken = newRefreshToken.Token,
                AccessToken = jwt.Token,
                Successful = true
            };
        }
    }
}

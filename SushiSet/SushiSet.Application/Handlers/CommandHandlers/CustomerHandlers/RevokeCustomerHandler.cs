using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CustomerCommands;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CustomerHandlers
{
    public class RevokeCustomerHandler : IRequestHandler<RevokeCustomer, RevokeCustomerResponse>
    {
        private readonly ICustomerRepository _customerRepository;

        public RevokeCustomerHandler(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public async Task<RevokeCustomerResponse> Handle(RevokeCustomer request, CancellationToken cancellationToken)
        {
            Customer customer = await _customerRepository.GetCustomerByToken(request.RefreshToken);

            if (customer == null)
            {
                return null;
            }

            RefreshToken refreshToken = customer.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return new RevokeCustomerResponse() { Revoked = false };
            }

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;

            _ = await _customerRepository.UpdateAsync(customer);

            return new RevokeCustomerResponse() 
            { 
                Revoked = true 
            };
        }
    }
}

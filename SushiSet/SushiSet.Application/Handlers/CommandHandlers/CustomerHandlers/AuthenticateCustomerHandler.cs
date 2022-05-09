using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CustomerCommands;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CustomerHandlers
{
    public class AuthenticateCustomerHandler : IRequestHandler<AuthenticateCustomer, AuthenticateCustomerResponse>
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AuthenticateCustomerHandler(ICustomerRepository customerRepository, IMapper mapper, ITokenService tokenService)
        {
            _customerRepository = customerRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateCustomerResponse> Handle(AuthenticateCustomer request, CancellationToken cancellationToken)
        {
            Customer customer = await _customerRepository.GetCustomerByName(request.Name);

            bool passwordInvalid = customer?.Password != request?.Password;

            AuthenticateCustomerResponse response = new();

            if (customer == null || passwordInvalid)
            {
                response.Successful = false;
                return response;
            }

            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);
            customer.RefreshTokens.Add(refreshToken);

            await _customerRepository.UpdateAsync(customer);

            response = _mapper.Map<AuthenticateCustomerResponse>(customer);
            response.RefreshToken = refreshToken.Token;

            response.AccessToken = _tokenService.GetGeneratedAccessToken(customer).Token;
            response.Successful = true;

            return response;
        }
    }
}

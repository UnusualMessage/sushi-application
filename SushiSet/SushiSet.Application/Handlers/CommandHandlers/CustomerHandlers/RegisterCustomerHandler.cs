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
    public class RegisterCustomerHandler : IRequestHandler<RegisterCustomer, AuthenticateCustomerResponse>
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly ITokenService _tokenService;
        private readonly IMapper _mapper;

        public RegisterCustomerHandler(ICustomerRepository customerRepository, IMapper mapper, ITokenService tokenService)
        {
            _customerRepository = customerRepository;
            _tokenService = tokenService;
            _mapper = mapper;
        }

        public async Task<AuthenticateCustomerResponse> Handle(RegisterCustomer request, CancellationToken cancellationToken)
        {
            Customer customer = await _customerRepository.GetCustomerByName(request.Name);

            AuthenticateCustomerResponse response = new();

            if (customer != null)
            {
                response.Successful = false;
                return response;
            }

            Customer newCustomer = _mapper.Map<Customer>(request);
            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            newCustomer.RefreshTokens.Add(refreshToken);

            customer = await _customerRepository.AddAsync(newCustomer);
            response = _mapper.Map<AuthenticateCustomerResponse>(newCustomer);

            response.RefreshToken = refreshToken.Token;
            response.AccessToken = _tokenService.GetGeneratedAccessToken(customer).Token;
            response.Successful = true;

            return response;
        }
    }
}

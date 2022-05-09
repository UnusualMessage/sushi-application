using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CourierCommands;
using SushiSet.Application.Responses.CourierResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CourierHandlers
{
    public class RegisterCourierHandler : IRequestHandler<RegisterCourier, AuthenticateCourierResponse>
    {
        private readonly ICourierRepository _courierRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public RegisterCourierHandler(ICourierRepository courierRepository, IMapper mapper, ITokenService tokenService)
        {
            _courierRepository = courierRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateCourierResponse> Handle(RegisterCourier request, CancellationToken cancellationToken)
        {
            Courier courier = await _courierRepository.GetCourierByName(request.Name);

            AuthenticateCourierResponse response = new();

            if (courier != null)
            {
                response.Successful = false;
                return response;
            }

            Courier newCourier = _mapper.Map<Courier>(request);
            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            newCourier.RefreshTokens.Add(refreshToken);

            courier = await _courierRepository.AddAsync(newCourier);
            response = _mapper.Map<AuthenticateCourierResponse>(newCourier);

            response.RefreshToken = refreshToken.Token;
            response.AccessToken = _tokenService.GetGeneratedAccessToken(courier).Token;
            response.Successful = true;

            return response;
        }
    }
}

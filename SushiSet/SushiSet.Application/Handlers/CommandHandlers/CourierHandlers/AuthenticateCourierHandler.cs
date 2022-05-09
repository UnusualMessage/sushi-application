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
    public class AuthenticateCourierHandler : IRequestHandler<AuthenticateCourier, AuthenticateCourierResponse>
    {
        private readonly ICourierRepository _courierRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AuthenticateCourierHandler(ICourierRepository courierRepository, IMapper mapper, ITokenService tokenService)
        {
            _courierRepository = courierRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateCourierResponse> Handle(AuthenticateCourier request, CancellationToken cancellationToken)
        {
            Courier courier = await _courierRepository.GetCourierByName(request.Name);

            bool passwordInvalid = courier?.Password != request?.Password;

            AuthenticateCourierResponse response = new();

            if (courier == null || passwordInvalid)
            {
                response.Successful = false;
                return response;
            }

            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);
            courier.RefreshTokens.Add(refreshToken);

            await _courierRepository.UpdateAsync(courier);

            response = _mapper.Map<AuthenticateCourierResponse>(courier);
            response.RefreshToken = refreshToken.Token;

            response.AccessToken = _tokenService.GetGeneratedAccessToken(courier).Token;
            response.Successful = true;

            return response;
        }
    }
}

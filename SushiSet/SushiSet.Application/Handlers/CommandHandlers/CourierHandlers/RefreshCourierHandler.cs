using MediatR;

using SushiSet.Application.Requests.Commands.CourierCommands;
using SushiSet.Application.Responses.CourierResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CourierHandlers
{
    public class RefreshCourierHandler : IRequestHandler<RefreshCourier, AuthenticateCourierResponse>
    {
        private readonly ICourierRepository _courierRepository;
        private readonly ITokenService _tokenService;

        public RefreshCourierHandler(ICourierRepository courierRepository, ITokenService tokenService)
        {
            _courierRepository = courierRepository;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateCourierResponse> Handle(RefreshCourier request, CancellationToken cancellationToken)
        {
            Courier courier = await _courierRepository.GetCourierByToken(request.RefreshToken);

            if (courier == null)
            {
                return null;
            }

            RefreshToken refreshToken = courier.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return null;
            }

            RefreshToken newRefreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            courier.RefreshTokens.Add(newRefreshToken);

            _ = await _courierRepository.UpdateAsync(courier);

            AccessToken jwt = _tokenService.GetGeneratedAccessToken(courier);

            return new AuthenticateCourierResponse()
            {
                Id = courier.Id,
                Name = courier.Name,
                Password = courier.Password,
                RefreshToken = newRefreshToken.Token,
                AccessToken = jwt.Token,
                Successful = true
            };
        }
    }
}

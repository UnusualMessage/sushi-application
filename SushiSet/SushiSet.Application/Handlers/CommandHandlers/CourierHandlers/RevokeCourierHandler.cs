using MediatR;

using SushiSet.Application.Requests.Commands.CourierCommands;
using SushiSet.Application.Responses.CourierResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CourierHandlers
{
    public class RevokeCourierHandler : IRequestHandler<RevokeCourier, RevokeCourierResponse>
    {
        private readonly ICourierRepository _courierRepository;

        public RevokeCourierHandler(ICourierRepository courierRepository)
        {
            _courierRepository = courierRepository;
        }

        public async Task<RevokeCourierResponse> Handle(RevokeCourier request, CancellationToken cancellationToken)
        {
            Courier courier = await _courierRepository.GetCourierByToken(request.RefreshToken);

            if (courier == null)
            {
                return null;
            }

            RefreshToken refreshToken = courier.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return new RevokeCourierResponse() { Revoked = false };
            }

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;

            _ = await _courierRepository.UpdateAsync(courier);

            return new RevokeCourierResponse()
            {
                Revoked = true
            };
        }
    }
}

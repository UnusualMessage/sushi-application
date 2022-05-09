using MediatR;

using SushiSet.Application.Requests.Commands.AdminCommands;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.AdminHandlers
{
    public class RevokeAdminHandler : IRequestHandler<RevokeAdmin, RevokeAdminResponse>
    {
        private readonly IAdministratorRepository _adminRepository;

        public RevokeAdminHandler(IAdministratorRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        public async Task<RevokeAdminResponse> Handle(RevokeAdmin request, CancellationToken cancellationToken)
        {
            Administrator admin = await _adminRepository.GetAdminByToken(request.RefreshToken);

            if (admin == null)
            {
                return null;
            }

            RefreshToken refreshToken = admin.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return new RevokeAdminResponse() { Revoked = false };
            }

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;

            _ = await _adminRepository.UpdateAsync(admin);

            return new RevokeAdminResponse()
            {
                Revoked = true
            };
        }
    }
}

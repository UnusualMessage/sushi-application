using MediatR;

using SushiSet.Application.Requests.Commands.AdminCommands;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.AdminHandlers
{
    public class RefreshAdminHandler : IRequestHandler<RefreshAdmin, AuthenticateAdminResponse>
    {
        private readonly IAdministratorRepository _adminRepository;
        private readonly ITokenService _tokenService;

        public RefreshAdminHandler(IAdministratorRepository adminRepository, ITokenService tokenService)
        {
            _adminRepository = adminRepository;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateAdminResponse> Handle(RefreshAdmin request, CancellationToken cancellationToken)
        {
            Administrator admin = await _adminRepository.GetAdminByToken(request.RefreshToken);

            if (admin == null)
            {
                return null;
            }

            RefreshToken refreshToken = admin.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return null;
            }

            RefreshToken newRefreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            admin.RefreshTokens.Add(newRefreshToken);

            _ = await _adminRepository.UpdateAsync(admin);

            AccessToken jwt = _tokenService.GetGeneratedAccessToken(admin);

            return new AuthenticateAdminResponse()
            {
                Id = admin.Id,
                Name = admin.Name,
                Password = admin.Password,
                RefreshToken = newRefreshToken.Token,
                AccessToken = jwt.Token,
                Successful = true
            };
        }
    }
}

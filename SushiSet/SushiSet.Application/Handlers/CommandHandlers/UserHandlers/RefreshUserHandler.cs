using MediatR;

using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.AdminHandlers
{
    public class RefreshUserHandler : IRequestHandler<RefreshUser, AuthenticateUserResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly ITokenService _tokenService;

        public RefreshUserHandler(IUserRepository userRepository, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateUserResponse> Handle(RefreshUser request, CancellationToken cancellationToken)
        {
            User user = await _userRepository.GetUserByToken(request.RefreshToken);

            if (user == null)
            {
                return null;
            }

            RefreshToken refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return null;
            }

            RefreshToken newRefreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;
            refreshToken.ReplacedByToken = newRefreshToken.Token;
            user.RefreshTokens.Add(newRefreshToken);

            _ = await _userRepository.UpdateAsync(user);

            AccessToken jwt = _tokenService.GetGeneratedAccessToken(user);

            return new AuthenticateUserResponse()
            {
                Id = user.Id,
                Name = user.Name,
                Password = user.Password,
                Role = user.Role,
                RefreshToken = newRefreshToken.Token,
                AccessToken = jwt.Token,
                Successful = true
            };
        }
    }
}

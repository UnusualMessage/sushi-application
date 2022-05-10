using MediatR;

using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.AdminHandlers
{
    public class RevokeUserHandler : IRequestHandler<RevokeUser, RevokeUserResponse>
    {
        private readonly IUserRepository _userRepository;

        public RevokeUserHandler(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<RevokeUserResponse> Handle(RevokeUser request, CancellationToken cancellationToken)
        {
            User user = await _userRepository.GetUserByToken(request.RefreshToken);

            if (user == null)
            {
                return null;
            }

            RefreshToken refreshToken = user.RefreshTokens.Single(x => x.Token == request.RefreshToken);

            if (!refreshToken.IsActive)
            {
                return new RevokeUserResponse() { Revoked = false };
            }

            refreshToken.Revoked = DateTime.UtcNow;
            refreshToken.RevokedByIp = request.IpAddress;

            _ = await _userRepository.UpdateAsync(user);

            return new RevokeUserResponse()
            {
                Revoked = true
            };
        }
    }
}

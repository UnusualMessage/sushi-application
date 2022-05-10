using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.UserHandlers
{
    public class AuthenticateUserHandler : IRequestHandler<AuthenticateUser, AuthenticateUserResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AuthenticateUserHandler(IUserRepository userRepository, IMapper mapper, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateUserResponse> Handle(AuthenticateUser request, CancellationToken cancellationToken)
        {
            User user = await _userRepository.GetUserByName(request.Name);

            bool passwordInvalid = user?.Password != request?.Password;

            AuthenticateUserResponse response = new();

            if (user == null || passwordInvalid)
            {
                response.Successful = false;
                return response;
            }

            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);
            user.RefreshTokens.Add(refreshToken);

            await _userRepository.UpdateAsync(user);

            response = _mapper.Map<AuthenticateUserResponse>(user);
            response.RefreshToken = refreshToken.Token;

            response.AccessToken = _tokenService.GetGeneratedAccessToken(user).Token;
            response.Successful = true;

            return response;
        }
    }
}

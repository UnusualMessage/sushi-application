using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.AdminHandlers
{
    public class RegisterUserHandler : IRequestHandler<RegisterUser, AuthenticateUserResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public RegisterUserHandler(IUserRepository userRepository, IMapper mapper, ITokenService tokenService)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateUserResponse> Handle(RegisterUser request, CancellationToken cancellationToken)
        {
            User user = await _userRepository.GetUserByName(request.Name);

            AuthenticateUserResponse response = new();

            if (user != null)
            {
                response.Successful = false;
                return response;
            }

            User newUser = _mapper.Map<User>(request);
            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            newUser.RefreshTokens.Add(refreshToken);

            user = await _userRepository.AddAsync(newUser);
            response = _mapper.Map<AuthenticateUserResponse>(newUser);

            response.RefreshToken = refreshToken.Token;
            response.AccessToken = _tokenService.GetGeneratedAccessToken(user).Token;
            response.Successful = true;

            return response;
        }
    }
}

using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.AdminCommands;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.AdminHandlers
{
    public class AuthenticateAdminHandler : IRequestHandler<AuthenticateAdmin, AuthenticateAdminResponse>
    {
        private readonly IAdministratorRepository _adminRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public AuthenticateAdminHandler(IAdministratorRepository adminRepository, IMapper mapper, ITokenService tokenService)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateAdminResponse> Handle(AuthenticateAdmin request, CancellationToken cancellationToken)
        {
            Administrator admin = await _adminRepository.GetAdminByName(request.Name);

            bool passwordInvalid = admin?.Password != request?.Password;

            AuthenticateAdminResponse response = new();

            if (admin == null || passwordInvalid)
            {
                response.Successful = false;
                return response;
            }

            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);
            admin.RefreshTokens.Add(refreshToken);

            await _adminRepository.UpdateAsync(admin);

            response = _mapper.Map<AuthenticateAdminResponse>(admin);
            response.RefreshToken = refreshToken.Token;

            response.AccessToken = _tokenService.GetGeneratedAccessToken(admin).Token;
            response.Successful = true;

            return response;
        }
    }
}

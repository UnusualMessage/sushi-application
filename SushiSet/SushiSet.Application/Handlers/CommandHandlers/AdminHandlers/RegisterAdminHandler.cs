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
    public class RegisterAdminHandler : IRequestHandler<RegisterAdmin, AuthenticateAdminResponse>
    {
        private readonly IAdministratorRepository _adminRepository;
        private readonly IMapper _mapper;
        private readonly ITokenService _tokenService;

        public RegisterAdminHandler(IAdministratorRepository adminRepository, IMapper mapper, ITokenService tokenService)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateAdminResponse> Handle(RegisterAdmin request, CancellationToken cancellationToken)
        {
            Administrator admin = await _adminRepository.GetAdminByName(request.Name);

            AuthenticateAdminResponse response = new();

            if (admin != null)
            {
                response.Successful = false;
                return response;
            }

            Administrator newAdmin = _mapper.Map<Administrator>(request);
            RefreshToken refreshToken = _tokenService.GetGeneratedRefreshToken(request.IpAddress);

            newAdmin.RefreshTokens.Add(refreshToken);

            admin = await _adminRepository.AddAsync(newAdmin);
            response = _mapper.Map<AuthenticateAdminResponse>(newAdmin);

            response.RefreshToken = refreshToken.Token;
            response.AccessToken = _tokenService.GetGeneratedAccessToken(admin).Token;
            response.Successful = true;

            return response;
        }
    }
}

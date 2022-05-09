using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.AdminQueries;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.AdminHandlers
{
    public class GetAdminByIdHandler : IRequestHandler<GetAdminById, AdminResponse>
    {
        private readonly IAdministratorRepository _adminRepository;
        private readonly IMapper _mapper;

        public GetAdminByIdHandler(IAdministratorRepository adminRepository, IMapper mapper)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
        }

        public async Task<AdminResponse> Handle(GetAdminById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<AdminResponse>(await _adminRepository.GetByIdAsync(request.Id));
        }
    }
}

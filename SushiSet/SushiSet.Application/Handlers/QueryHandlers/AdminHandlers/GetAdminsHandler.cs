using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.AdminQueries;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.AdminHandlers
{
    public class GetAdminsHandler : IRequestHandler<GetAdmins, IEnumerable<AdminResponse>>
    {
        private readonly IAdministratorRepository _adminRepository;
        private readonly IMapper _mapper;

        public GetAdminsHandler(IAdministratorRepository adminRepository, IMapper mapper)
        {
            _adminRepository = adminRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<AdminResponse>> Handle(GetAdmins request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<AdminResponse>>(await _adminRepository.GetAllAsync());
        }
    }
}

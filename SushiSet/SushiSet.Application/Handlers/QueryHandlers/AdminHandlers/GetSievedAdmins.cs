using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.AdminQueries;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.AdminHandlers
{
    public class GetSievedAdminsHandler : IRequestHandler<GetSievedAdmins, IEnumerable<AdminResponse>>
    {
        private readonly IAdministratorRepository _adminRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedAdminsHandler(IAdministratorRepository adminRepository, ISieveProcessor processor)
        {
            _adminRepository = adminRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<AdminResponse>> Handle(GetSievedAdmins request, CancellationToken cancellationToken)
        {
            IEnumerable<Administrator> result = await _adminRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<AdminProfile>();
            });

            IQueryable<AdminResponse> response = result.AsQueryable().ProjectTo<AdminResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

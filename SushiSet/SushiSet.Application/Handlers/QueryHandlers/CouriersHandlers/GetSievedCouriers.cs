using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.CourierQueries;
using SushiSet.Application.Responses.CourierResponses;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CouriersHandlers
{
    public class GetSievedCouriersHandler : IRequestHandler<GetSievedCouriers, IEnumerable<CourierResponse>>
    {
        private readonly ICourierRepository _courierRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedCouriersHandler(ICourierRepository courierRepository, ISieveProcessor processor)
        {
            _courierRepository = courierRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<CourierResponse>> Handle(GetSievedCouriers request, CancellationToken cancellationToken)
        {
            IEnumerable<Courier> result = await _courierRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<CourierProfile>();
            });

            IQueryable<CourierResponse> response = result.AsQueryable().ProjectTo<CourierResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

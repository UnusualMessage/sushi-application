using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.CityQueries;
using SushiSet.Application.Responses.CityResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CityHandlers
{
    public class GetSievedCitiesHandler : IRequestHandler<GetSievedCities, IEnumerable<CityResponse>>
    {
        private readonly ICityRepository _cityRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedCitiesHandler(ICityRepository cityRepository, ISieveProcessor processor)
        {
            _cityRepository = cityRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<CityResponse>> Handle(GetSievedCities request, CancellationToken cancellationToken)
        {
            IEnumerable<City> result = await _cityRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<CityProfile>();
            });

            IQueryable<CityResponse> response = result.AsQueryable().ProjectTo<CityResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

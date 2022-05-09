using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CityQueries;
using SushiSet.Application.Responses.CityResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CityHandlers
{
    public class GetCitiesHandler : IRequestHandler<GetCities, IEnumerable<CityResponse>>
    {
        private readonly ICityRepository _cityRepository;
        private readonly IMapper _mapper;

        public GetCitiesHandler(ICityRepository cityRepository, IMapper mapper)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CityResponse>> Handle(GetCities request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<CityResponse>>(await _cityRepository.GetAllAsync());
        }
    }
}

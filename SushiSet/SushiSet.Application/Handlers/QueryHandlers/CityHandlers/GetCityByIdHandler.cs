using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CityQueries;
using SushiSet.Application.Responses.CityResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CityHandlers
{
    public class GetCityByIdHandler : IRequestHandler<GetCityById, CityResponse>
    {
        private readonly ICityRepository _cityRepository;
        private readonly IMapper _mapper;

        public GetCityByIdHandler(ICityRepository cityRepository, IMapper mapper)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
        }

        public async Task<CityResponse> Handle(GetCityById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CityResponse>(await _cityRepository.GetByIdAsync(request.Id));
        }
    }
}

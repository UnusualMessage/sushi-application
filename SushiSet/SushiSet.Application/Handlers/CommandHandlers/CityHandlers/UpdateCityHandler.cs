using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CityCommands;
using SushiSet.Application.Responses.CityResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CityHandlers
{
    public class UpdateCityHandler : IRequestHandler<UpdateCity, CityResponse>
    {
        private readonly ICityRepository _cityRepository;
        private readonly IMapper _mapper;

        public UpdateCityHandler(ICityRepository cityRepository, IMapper mapper)
        {
            _cityRepository = cityRepository;
            _mapper = mapper;
        }

        public async Task<CityResponse> Handle(UpdateCity request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CityResponse>(await _cityRepository.UpdateAsync(_mapper.Map<City>(request)));
        }
    }
}

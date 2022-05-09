using AutoMapper;

using SushiSet.Application.Requests.Commands.CityCommands;
using SushiSet.Application.Responses.CityResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class CityProfile : Profile
    {
        public CityProfile()
        {
            CreateMap<CreateCity, City>();
            CreateMap<UpdateCity, City>();
            CreateMap<City, CityResponse>();
        }
    }
}

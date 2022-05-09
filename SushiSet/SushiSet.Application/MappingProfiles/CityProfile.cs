using AutoMapper;

using SushiSet.Application.Responses.CityResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class CityProfile : Profile
    {
        public CityProfile()
        {
            CreateMap<City, CityResponse>();
        }
    }
}

using AutoMapper;

using SushiSet.Application.Responses.ShopResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class ShopProfile : Profile
    {
        public ShopProfile()
        {
            CreateMap<Shop, ShopResponse>();
        }
    }
}

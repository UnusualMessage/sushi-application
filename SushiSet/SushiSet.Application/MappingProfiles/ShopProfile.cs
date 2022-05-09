using AutoMapper;

using SushiSet.Application.Requests.Commands.ShopCommands;
using SushiSet.Application.Responses.ShopResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class ShopProfile : Profile
    {
        public ShopProfile()
        {
            CreateMap<CreateShop, Shop>();
            CreateMap<UpdateShop, Shop>();
            CreateMap<Shop, ShopResponse>();
        }
    }
}

using AutoMapper;

using SushiSet.Application.Requests.Commands.CartUnitCommands;
using SushiSet.Application.Responses.CartUnitResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class CartUnitProfile : Profile
    {
        public CartUnitProfile()
        {
            CreateMap<CreateCartUnit, CartUnit>();
            CreateMap<UpdateCartUnit, CartUnit>();
            CreateMap<CartUnit, CartUnitResponse>();
        }
    }
}

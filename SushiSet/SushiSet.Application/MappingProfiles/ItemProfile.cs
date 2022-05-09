using AutoMapper;

using SushiSet.Application.Requests.Commands.ItemCommands;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class ItemProfile : Profile
    {
        public ItemProfile()
        {
            CreateMap<CreateItem, Item>();
            CreateMap<UpdateItem, Item>();

            CreateMap<Item, ItemResponse>()
                .ForMember(src => src.Category, opt => opt.MapFrom(src => src.Category.Name));
        }
    }
}

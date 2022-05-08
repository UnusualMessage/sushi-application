using AutoMapper;

using SushiSet.Application.Requests.Commands.CategoryCommands;
using SushiSet.Application.Responses.CategoryResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class CategoryProfile : Profile
    {
        public CategoryProfile()
        {
            CreateMap<CreateCategory, Category>();
            CreateMap<Category, CategoryResponse>();
            CreateMap<UpdateCategory, Category>();
        }
    }
}

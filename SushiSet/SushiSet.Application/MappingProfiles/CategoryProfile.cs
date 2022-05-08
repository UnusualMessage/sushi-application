using AutoMapper;

using SushiSet.Application.Requests.Commands.Category;
using SushiSet.Application.Responses.Category;
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

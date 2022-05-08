using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.CategoryHandlers;
using SushiSet.Application.Requests.Queries.CategoryQueries;
using SushiSet.Application.Responses.CategoryResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class CategoryQueryHandlersConfiguration
    {
        public static void AddCategoryQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetCategories, IEnumerable<CategoryResponse>>, GetCategoriesHandler>();
            services.AddScoped<IRequestHandler<GetCategoryById, CategoryResponse>, GetCategoryByIdHandler>();
        }
    }
}

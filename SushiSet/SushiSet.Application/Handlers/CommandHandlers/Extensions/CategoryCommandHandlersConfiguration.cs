using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.CategoryCommands;
using SushiSet.Application.Requests.Commands.CategoryCommands;
using SushiSet.Application.Responses.CategoryResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class CategoryCommandHandlersConfiguration
    {
        public static void AddCategoryCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateCategory, CategoryResponse>, CreateCategoryHandler>();
            services.AddScoped<IRequestHandler<DeleteCategory, CategoryResponse>, DeleteCategoryHandler>();
            services.AddScoped<IRequestHandler<UpdateCategory, CategoryResponse>, UpdateCategoryHandler>();
        }
    }
}

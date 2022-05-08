using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.ItemHandlers;
using SushiSet.Application.Requests.Commands.ItemCommands;
using SushiSet.Application.Responses.ItemResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class ItemCommandHandlersConfiguration
    {
        public static void AddItemCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateItem, ItemResponse>, CreateItemHandler>();
            services.AddScoped<IRequestHandler<DeleteItem, ItemResponse>, DeleteItemHandler>();
            services.AddScoped<IRequestHandler<UpdateItem, ItemResponse>, UpdateItemHandler>();
        }
    }
}

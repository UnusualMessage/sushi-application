using MediatR;
using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.ItemHandlers;
using SushiSet.Application.Requests.Queries.ItemQueries;
using SushiSet.Application.Responses.ItemResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class ItemQueryHandlersConfiguration
    {
        public static void AddItemQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetItems, IEnumerable<ItemResponse>>, GetItemsHandler>();
            services.AddScoped<IRequestHandler<GetItemById, ItemResponse>, GetItemByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedItems, IEnumerable<ItemResponse>>, GetSievedItemsHandler>(); 
        }
    }
}

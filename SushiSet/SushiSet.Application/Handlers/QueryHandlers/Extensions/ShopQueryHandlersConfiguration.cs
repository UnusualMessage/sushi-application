using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.ShopHandlers;
using SushiSet.Application.Requests.Queries.ShopQueries;
using SushiSet.Application.Responses.ShopResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class ShopQueryHandlersConfiguration
    {
        public static void AddShopQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetShops, IEnumerable<ShopResponse>>, GetShopsHandler>();
            services.AddScoped<IRequestHandler<GetShopById, ShopResponse>, GetShopByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedShops, IEnumerable<ShopResponse>>, GetSievedShopsHandler>();
        }
    }
}

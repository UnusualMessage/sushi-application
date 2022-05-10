using MediatR;
using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.CartUnitHandlers;
using SushiSet.Application.Requests.Queries.CartUnitQueries;
using SushiSet.Application.Responses.CartUnitResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class CartUnitQueryHandlersConfiguration
    {
        public static void AddCartUnitQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetSievedCartUnits, IEnumerable<CartUnitResponse>>, GetSievedCartUnitsHandler>();
        }
    }
}

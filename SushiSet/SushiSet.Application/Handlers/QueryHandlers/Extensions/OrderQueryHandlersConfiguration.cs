using MediatR;
using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.OrderHandlers;
using SushiSet.Application.Requests.Queries.OrderQueries;
using SushiSet.Application.Responses.OrderResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class OrderQueryHandlersConfiguration
    {
        public static void AddOrderQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetOrders, IEnumerable<OrderResponse>>, GetOrdersHandler>();
            services.AddScoped<IRequestHandler<GetOrderById, OrderResponse>, GetOrderByIdHandler>();
        }
    }
}

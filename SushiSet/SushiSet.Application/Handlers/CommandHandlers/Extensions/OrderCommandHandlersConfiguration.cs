using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.OrderHandlers;
using SushiSet.Application.Requests.Commands.OrderCommands;
using SushiSet.Application.Responses.OrderResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class OrderCommandHandlersConfiguration
    {
        public static void AddOrderCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateOrder, OrderResponse>, CreateOrderHandler>();
            services.AddScoped<IRequestHandler<DeleteOrder, OrderResponse>, DeleteOrderHandler>();
            services.AddScoped<IRequestHandler<UpdateOrder, OrderResponse>, UpdateOrderHandler>();
        }
    }
}

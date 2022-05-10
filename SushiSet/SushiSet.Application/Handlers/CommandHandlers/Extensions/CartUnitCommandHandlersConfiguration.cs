using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.CartUnitHandlers;
using SushiSet.Application.Requests.Commands.CartUnitCommands;
using SushiSet.Application.Responses.CartUnitResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class CartUnitCommandHandlersConfiguration
    {
        public static void AddCartUnitCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateCartUnit, CartUnitResponse>, CreateCartUnitHandler>();
            services.AddScoped<IRequestHandler<DeleteCartUnit, CartUnitResponse>, DeleteCartUnitHandler>();
            services.AddScoped<IRequestHandler<UpdateCartUnit, CartUnitResponse>, UpdateCartUnitHandler>();
        }
    }
}

using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.ShopHandlers;
using SushiSet.Application.Requests.Commands.ShopCommands;
using SushiSet.Application.Responses.ShopResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class ShopCommandHandlersConfiguration
    {
        public static void AddShopCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateShop, ShopResponse>, CreateShopHandler>();
            services.AddScoped<IRequestHandler<DeleteShop, ShopResponse>, DeleteShopHandler>();
            services.AddScoped<IRequestHandler<UpdateShop, ShopResponse>, UpdateShopHandler>();
        }
    }
}

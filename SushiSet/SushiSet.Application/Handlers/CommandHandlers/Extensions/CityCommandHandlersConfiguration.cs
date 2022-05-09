using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.CityHandlers;
using SushiSet.Application.Requests.Commands.CityCommands;
using SushiSet.Application.Responses.CityResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class CityCommandHandlersConfiguration
    {
        public static void AddCityCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<CreateCity, CityResponse>, CreateCityHandler>();
            services.AddScoped<IRequestHandler<DeleteCity, CityResponse>, DeleteCityHandler>();
            services.AddScoped<IRequestHandler<UpdateCity, CityResponse>, UpdateCityHandler>();
        }
    }
}

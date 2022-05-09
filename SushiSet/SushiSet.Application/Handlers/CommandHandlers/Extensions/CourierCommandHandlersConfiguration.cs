using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.CourierHandlers;
using SushiSet.Application.Requests.Commands.CourierCommands;
using SushiSet.Application.Responses.CourierResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class CourierCommandHandlersConfiguration
    {
        public static void AddCourierCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<RegisterCourier, AuthenticateCourierResponse>, RegisterCourierHandler>();
            services.AddScoped<IRequestHandler<AuthenticateCourier, AuthenticateCourierResponse>, AuthenticateCourierHandler>();
            services.AddScoped<IRequestHandler<RefreshCourier, AuthenticateCourierResponse>, RefreshCourierHandler>();
            services.AddScoped<IRequestHandler<RevokeCourier, RevokeCourierResponse>, RevokeCourierHandler>();
        }
    }
}

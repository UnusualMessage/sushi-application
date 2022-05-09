using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.AdminHandlers;
using SushiSet.Application.Requests.Commands.AdminCommands;
using SushiSet.Application.Responses.AdminResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class AdminCommandHandlersConfiguration
    {
        public static void AddAdminCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<RegisterAdmin, AuthenticateAdminResponse>, RegisterAdminHandler>();
            services.AddScoped<IRequestHandler<AuthenticateAdmin, AuthenticateAdminResponse>, AuthenticateAdminHandler>();
            services.AddScoped<IRequestHandler<RefreshAdmin, AuthenticateAdminResponse>, RefreshAdminHandler>();
            services.AddScoped<IRequestHandler<RevokeAdmin, RevokeAdminResponse>, RevokeAdminHandler>();
        }
    }
}

using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.AdminHandlers;
using SushiSet.Application.Handlers.CommandHandlers.UserHandlers;
using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class UserCommandHandlersConfiguration
    {
        public static void AddUserCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<RegisterUser, AuthenticateUserResponse>, RegisterUserHandler>();
            services.AddScoped<IRequestHandler<AuthenticateUser, AuthenticateUserResponse>, AuthenticateUserHandler>();
            services.AddScoped<IRequestHandler<RefreshUser, AuthenticateUserResponse>, RefreshUserHandler>();
            services.AddScoped<IRequestHandler<RevokeUser, RevokeUserResponse>, RevokeUserHandler>();
        }
    }
}

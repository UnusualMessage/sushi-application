using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.CommandHandlers.CustomerHandlers;
using SushiSet.Application.Requests.Commands.CustomerCommands;
using SushiSet.Application.Responses.CustomerResponses;

namespace SushiSet.Application.Handlers.CommandHandlers.Extensions
{
    public static class CustomerCommandHandlersConfiguration
    {
        public static void AddCustomerCommandHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<RegisterCustomer, AuthenticateCustomerResponse>, RegisterCustomerHandler>();
            services.AddScoped<IRequestHandler<AuthenticateCustomer, AuthenticateCustomerResponse>, AuthenticateCustomerHandler>();
            services.AddScoped<IRequestHandler<RefreshCustomer, AuthenticateCustomerResponse>, RefreshCustomerHandler>();
            services.AddScoped<IRequestHandler<RevokeCustomer, RevokeCustomerResponse>, RevokeCustomerHandler>();
        }
    }
}

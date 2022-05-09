using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.CustomerHandlers;
using SushiSet.Application.Requests.Queries.CustomerQueries;
using SushiSet.Application.Responses.CustomerResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class CustomerQueryHandlersConfiguration
    {
        public static void AddCustomerQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetCustomers, IEnumerable<CustomerResponse>>, GetCustomersHandler>();
            services.AddScoped<IRequestHandler<GetCustomerById, CustomerResponse>, GetCustomerByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedCustomers, IEnumerable<CustomerResponse>>, GetSievedCustomersHandler>();
        }
    }
}

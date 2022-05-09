using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.AdminHandlers;
using SushiSet.Application.Requests.Queries.AdminQueries;
using SushiSet.Application.Responses.AdminResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class AdminQueryHandlersConfiguration
    {
        public static void AddAdminQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetAdmins, IEnumerable<AdminResponse>>, GetAdminsHandler>();
            services.AddScoped<IRequestHandler<GetAdminById, AdminResponse>, GetAdminByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedAdmins, IEnumerable<AdminResponse>>, GetSievedAdminsHandler>();
        }
    }
}

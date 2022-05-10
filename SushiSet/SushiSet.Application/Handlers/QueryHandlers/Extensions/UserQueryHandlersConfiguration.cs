using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.UserHandlers;
using SushiSet.Application.Requests.Queries.UserQueries;
using SushiSet.Application.Responses.UserResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class UserQueryHandlersConfiguration
    {
        public static void AddUserQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetUsers, IEnumerable<UserResponse>>, GetUsersHandler>();
            services.AddScoped<IRequestHandler<GetUserById, UserResponse>, GetUserByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedUsers, IEnumerable<UserResponse>>, GetSievedUsersHandler>();
        }
    }
}

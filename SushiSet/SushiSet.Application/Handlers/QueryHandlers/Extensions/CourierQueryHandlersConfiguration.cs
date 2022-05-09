using MediatR;

using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.CouriersHandlers;
using SushiSet.Application.Requests.Queries.CourierQueries;
using SushiSet.Application.Responses.CourierResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class CourierQueryHandlersConfiguration
    {
        public static void AddCourierQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetCouriers, IEnumerable<CourierResponse>>, GetCouriersHandler>();
            services.AddScoped<IRequestHandler<GetCourierById, CourierResponse>, GetCourierByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedCouriers, IEnumerable<CourierResponse>>, GetSievedCouriersHandler>();
        }
    }
}

using MediatR;
using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Handlers.QueryHandlers.CityHandlers;
using SushiSet.Application.Requests.Queries.CityQueries;
using SushiSet.Application.Responses.CityResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Handlers.QueryHandlers.Extensions
{
    public static class CityQueryHandlersConfiguration
    {
        public static void AddCityQueryHandlers(this IServiceCollection services)
        {
            services.AddScoped<IRequestHandler<GetCities, IEnumerable<CityResponse>>, GetCitiesHandler>();
            services.AddScoped<IRequestHandler<GetCityById, CityResponse>, GetCityByIdHandler>();
            services.AddScoped<IRequestHandler<GetSievedCities, IEnumerable<CityResponse>>, GetSievedCitiesHandler>();
        }
    }
}

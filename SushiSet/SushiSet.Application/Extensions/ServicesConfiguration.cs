using Microsoft.Extensions.DependencyInjection;

using SushiSet.Application.Services;
using SushiSet.Core.Interfaces.Services;

namespace SushiSet.Application.Extensions
{
    public static class ServicesConfiguration
    {
        public static void AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<ITokenService, JwtService>();
        }
    }
}

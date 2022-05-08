using Microsoft.Extensions.DependencyInjection;

using SushiSet.Core.Interfaces.Services;
using SushiSet.Infrastructure.Services;

namespace SushiSet.Infrastructure.Extensions
{
    public static class ServicesConfiguration
    {
        public static void AddInfrastructureServices(this IServiceCollection services)
        {
            services.AddScoped<IFileService, FileService>();
        }
    }
}

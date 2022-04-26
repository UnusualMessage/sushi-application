using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using SushiSet.Infrastructure.Context;

namespace SushiSet.Infrastructure.Extensions
{
    public static class DatabaseConfiguration
    {
        public static void AddPostgresql(this IServiceCollection services, IConfiguration configuration)
        {
            string connection = configuration["ConnectionStrings:Connection"];
            services.AddDbContext<ApplicationContext>(options => options.UseNpgsql(connection));
        }

        public static void AddRepositories(this IServiceCollection services)
        {

        }
    }
}

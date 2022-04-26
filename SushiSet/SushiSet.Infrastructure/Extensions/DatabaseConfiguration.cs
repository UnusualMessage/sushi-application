using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories;

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
            services.AddScoped<IAboutRepository, AboutRepository>();
            services.AddScoped<ICategoryRepository, CategoryRepository>();
            services.AddScoped<IItemRepository, ItemRepository>();
            services.AddScoped<IOrderRepository, OrderRepository>();
            services.AddScoped<IRefreshTokenRepository, RefreshTokenRepository>();

            services.AddScoped<ICustomerRepository, CustomerRepository>();
            services.AddScoped<ICourierRepository, CourierRepository>();
            services.AddScoped<IAdministratorRepository, AdministratorRepository>();
        }
    }
}

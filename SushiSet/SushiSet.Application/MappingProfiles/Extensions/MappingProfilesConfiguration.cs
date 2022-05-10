using Microsoft.Extensions.DependencyInjection;

namespace SushiSet.Application.MappingProfiles.Extensions
{
    public static class MappingProfilesConfiguration
    {
        public static void AddMappingProfiles(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(CategoryProfile));
            services.AddAutoMapper(typeof(ItemProfile));
            services.AddAutoMapper(typeof(OrderProfile));

            services.AddAutoMapper(typeof(ShopProfile));
            services.AddAutoMapper(typeof(CityProfile));
            
            services.AddAutoMapper(typeof(UserProfile));
        }
    }
}

using Microsoft.Extensions.DependencyInjection;

namespace SushiSet.Application.MappingProfiles.Extensions
{
    public static class MappingProfilesConfiguration
    {
        public static void AddMappingProfiles(this IServiceCollection services)
        {
            services.AddAutoMapper(typeof(CategoryProfile));
            services.AddAutoMapper(typeof(ItemProfile));
        }
    }
}

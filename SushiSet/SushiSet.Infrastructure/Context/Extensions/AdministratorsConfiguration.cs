using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Users;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public static class AdministratorsConfiguration
    {
        public static void AddAdministrators(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Administrator>().ToTable("Administrators");
        }
    }
}

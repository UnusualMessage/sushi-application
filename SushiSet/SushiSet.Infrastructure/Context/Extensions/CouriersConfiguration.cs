using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Users;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public static class CouriersConfiguration
    {
        public static void AddCouriers(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Courier>().ToTable("Couriers");
        }
    }
}

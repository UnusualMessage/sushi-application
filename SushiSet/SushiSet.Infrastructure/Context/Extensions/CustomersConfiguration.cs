using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Users;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public static class CustomersConfiguration
    {
        public static void AddCustomers(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().ToTable("Customers");
        }
    }
}

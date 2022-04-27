using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;
using SushiSet.Infrastructure.Context.Extensions;

namespace SushiSet.Infrastructure.Context
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderUnit> OrderUnits { get; set; }

        public DbSet<About> Abouts { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Customer> Customers{ get; set; }
        public DbSet<Courier> Couriers { get; set; }
        public DbSet<Administrator> Administrators { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public ApplicationContext(DbContextOptions options) : base(options) 
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.AddCustomers();
            modelBuilder.AddCouriers();
            modelBuilder.AddAdministrators();
            modelBuilder.AddRefreshTokens();

            modelBuilder.AddOrderUnits();
            modelBuilder.AddOrders();
            modelBuilder.AddItems();
            modelBuilder.AddCategories();

            modelBuilder.AddAbouts();
        }
    }
}

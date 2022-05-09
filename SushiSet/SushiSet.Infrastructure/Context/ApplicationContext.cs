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

        public DbSet<About> Abouts { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Shop> Shops { get; set; }

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
            modelBuilder.ApplyConfiguration(new AboutsConfiguration());
            modelBuilder.ApplyConfiguration(new CitiesConfiguration());
            modelBuilder.ApplyConfiguration(new ShopsConfiguration());
               
            modelBuilder.ApplyConfiguration(new UsersConfiguration());
            modelBuilder.ApplyConfiguration(new AdministratorsConfiguration());
            modelBuilder.ApplyConfiguration(new CustomersConfiguration());
            modelBuilder.ApplyConfiguration(new CouriersConfiguration());
            modelBuilder.ApplyConfiguration(new RefreshTokensConfiguration());

            modelBuilder.ApplyConfiguration(new CategoriesConfiguration());
            modelBuilder.ApplyConfiguration(new ItemsConfiguration());
            modelBuilder.ApplyConfiguration(new OrdersConfiguration());
        }
    }
}

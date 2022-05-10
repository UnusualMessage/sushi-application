using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Infrastructure.Context.Configuration;

namespace SushiSet.Infrastructure.Context
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<Order> Orders { get; set; }

        public DbSet<City> Cities { get; set; }
        public DbSet<Shop> Shops { get; set; }

        public DbSet<CartUnit> CartUnits { get; set; }
        public DbSet<OrderUnit> OrderUnits { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public ApplicationContext(DbContextOptions options) : base(options) 
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CitiesConfiguration());
            modelBuilder.ApplyConfiguration(new ShopsConfiguration());
               
            modelBuilder.ApplyConfiguration(new UsersConfiguration());
            modelBuilder.ApplyConfiguration(new RefreshTokensConfiguration());

            modelBuilder.ApplyConfiguration(new CategoriesConfiguration());
            modelBuilder.ApplyConfiguration(new ItemsConfiguration());
            modelBuilder.ApplyConfiguration(new OrdersConfiguration());

            modelBuilder.ApplyConfiguration(new CartUnitsConfiguration());
            modelBuilder.ApplyConfiguration(new OrderUnitsConfiguration());
        }
    }
}

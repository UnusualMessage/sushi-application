using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Users;

namespace SushiSet.Infrastructure.Context
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Item> Items { get; set; }
        public DbSet<Category> Categories { get; set; }

        public DbSet<About> Informations { get; set; }

        public DbSet<Customer> Users { get; set; }
        public DbSet<Courier> Couriers { get; set; }
        public DbSet<Administrator> Administrators { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }

        public ApplicationContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}

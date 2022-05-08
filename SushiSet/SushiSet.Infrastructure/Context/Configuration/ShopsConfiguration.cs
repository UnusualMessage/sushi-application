using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class ShopsConfiguration : IEntityTypeConfiguration<Shop>
    {
        public void Configure(EntityTypeBuilder<Shop> builder)
        {
            builder
                .ToTable("SHOPS");

            builder.Property(k => k.Id)
                .HasColumnName("SHOP_ID");

            builder.Property(p => p.Address)
                .HasColumnName("SHOP_ADDRESS")
                .IsRequired();

            builder.HasOne(p => p.City).WithMany(p => p.Shops)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Property(p => p.CityId)
                .HasColumnName("SHOP_CITY_ID");
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class OrderUnitsConfiguration : IEntityTypeConfiguration<OrderUnit>
    {
        public void Configure(EntityTypeBuilder<OrderUnit> builder)
        {
            builder
                .ToTable("ORDER_UNITS");

            builder.Property(k => k.Id)
                .HasColumnName("ORDER_UNIT_ID");

            builder.Property(p => p.Count)
                .HasColumnName("ORDER_UNIT_COUNT")
                .IsRequired()
                .HasDefaultValue(1);

            builder.HasOne(k => k.Order).WithMany(k => k.OrderUnits)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(k => k.Item).WithMany(k => k.OrderUnits)
                .OnDelete(DeleteBehavior.Restrict);

            builder.Property(p => p.OrderId)
                .HasColumnName("ORDER_UNIT_ORDER_ID");

            builder.Property(p => p.ItemId)
                .HasColumnName("ORDER_UNIT_ITEM_ID");
        }
    }
}

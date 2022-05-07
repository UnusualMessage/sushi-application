using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class OrdersConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("ORDERS");

            builder.Property(p => p.Id)
                .HasColumnName("ORDER_ID");

            builder.Property(p => p.Title)
                .HasColumnName("ORDER_TITLE")
                .IsRequired()
                .HasDefaultValue("ЗАКАЗ");

            builder.Property(p => p.Status)
                .HasColumnName("ORDER_STATUS")
                .IsRequired()
                .HasDefaultValue("Оформлен");

            builder.Property(p => p.Created)
                .HasColumnName("ORDER_DATE")
                .IsRequired();

            builder.Property(p => p.InCart)
                .HasColumnName("ORDER_IN_CART")
                .IsRequired();

            builder.HasOne(k => k.Shop).WithMany(k => k.Orders)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(k => k.Courier).WithMany(k => k.Orders)
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(k => k.Customer).WithMany(k => k.Orders)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Property(p => p.ShopId)
                .HasColumnName("ORDER_SHOP_ID");

            builder.Property(p => p.CourierId)
                .HasColumnName("ORDER_COURIER_ID");

            builder.Property(p => p.CustomerId)
                .HasColumnName("ORDER_CUSTOMER_ID");
        }
    }
}

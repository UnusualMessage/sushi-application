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

            builder.HasOne(e => e.Customer).WithMany(e => e.Orders);

            builder.HasOne(e => e.Courier).WithMany(e => e.Deliveries);
        }
    }
}

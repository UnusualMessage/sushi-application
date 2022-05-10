using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Configuration
{
    public class OrderUnitsConfiguration : IEntityTypeConfiguration<OrderUnit>
    {
        public void Configure(EntityTypeBuilder<OrderUnit> builder)
        {
            builder.ToTable("ORDER_UNITS");
        }
    }
}

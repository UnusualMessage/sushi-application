using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Configuration
{
    public class CartUnitsConfiguration : IEntityTypeConfiguration<CartUnit>
    {
        public void Configure(EntityTypeBuilder<CartUnit> builder)
        {
            builder.ToTable("CART_UNITS");
        }
    }
}

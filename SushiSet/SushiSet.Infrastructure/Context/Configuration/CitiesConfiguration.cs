using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class CitiesConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.ToTable("CITIES");

            builder.Property(k => k.Id)
                .HasColumnName("CITY_ID");

            builder.Property(p => p.Name)
                .HasColumnName("CITY_NAME")
                .IsRequired();
        }
    }
}

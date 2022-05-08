using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class AboutsConfiguration : IEntityTypeConfiguration<About>
    {
        public void Configure(EntityTypeBuilder<About> builder)
        {
            builder.ToTable("ABOUTS");

            builder.Property(k => k.Id)
                .HasColumnName("ABOUT_ID");

            builder.Property(p => p.Description)
                .HasColumnName("ABOUT_DESCRIPTION");
        }
    }
}

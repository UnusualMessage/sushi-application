using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class CategoriesConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("CATEGORIES");

            builder.Property(k => k.Id)
                .HasColumnName("CATEGORY_ID");

            builder.Property(p => p.Name)
                .HasColumnName("CATEGORY_NAME")
                .IsRequired();

            builder.Property(p => p.PicturePath)
                .HasColumnName("CATEGORY_PICTURE_PATH")
                .IsRequired();
        }
    }
}

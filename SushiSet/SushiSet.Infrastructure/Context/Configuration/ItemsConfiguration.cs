using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class ItemsConfiguration : IEntityTypeConfiguration<Item>
    {
        public void Configure(EntityTypeBuilder<Item> builder)
        {
            builder.ToTable("ITEMS");

            builder.Property(k => k.Id)
                .HasColumnName("ITEM_ID");

            builder.Property(p => p.Name)
                .HasColumnName("ITEM_NAME")
                .IsRequired()
                .HasDefaultValue("ПРИМЕР");

            builder.Property(p => p.Description)
                .HasColumnName("ITEM_DESCRIPTION");

            builder.Property(p => p.Price)
                .HasColumnName("ITEM_PRICE")
                .IsRequired()
                .HasDefaultValue(0);

            builder.HasOne(k => k.Category).WithMany(k => k.Items)
                .HasForeignKey(k => k.CategoryId)
                .OnDelete(DeleteBehavior.SetNull);

            builder.Property(k => k.CategoryId)
                .HasColumnName("CATEGORY_ID");
        }
    }
}

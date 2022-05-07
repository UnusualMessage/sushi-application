using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using SushiSet.Core.Entities.Users;

namespace SushiSet.Infrastructure.Context.Extensions
{
    public class AdministratorsConfiguration : IEntityTypeConfiguration<Administrator>
    {
        public void Configure(EntityTypeBuilder<Administrator> builder)
        {
            builder.ToTable("ADMINS");
        }
    }
}

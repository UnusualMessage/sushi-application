using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class ShopRepository : Repository<Shop>, IShopRepository
    {
        public ShopRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public async override Task<Shop> UpdateAsync(Shop entity)
        {
            Shop selected = await _applicationContext.Set<Shop>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
    }
}

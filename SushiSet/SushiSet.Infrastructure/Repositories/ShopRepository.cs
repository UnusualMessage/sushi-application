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

        public override Task<Shop> UpdateAsync(Shop entity, string properties)
        {
            throw new System.NotImplementedException();
        }
    }
}

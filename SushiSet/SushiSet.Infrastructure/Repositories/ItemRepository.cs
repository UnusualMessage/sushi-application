using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class ItemRepository : Repository<Item>, IItemRepository
    {
        public ItemRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<Item> UpdateAsync(Item entity, string properties)
        {
            throw new System.NotImplementedException();
        }
    }
}

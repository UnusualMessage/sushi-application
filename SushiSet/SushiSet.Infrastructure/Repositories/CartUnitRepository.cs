using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CartUnitRepository : Repository<CartUnit>, ICartUnitRepository
    {
        public CartUnitRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<CartUnit> UpdateAsync(CartUnit entity)
        {
            throw new System.NotImplementedException();
        }
    }
}

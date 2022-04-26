using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<Order> UpdateAsync(Order entity, string properties)
        {
            throw new System.NotImplementedException();
        }
    }
}

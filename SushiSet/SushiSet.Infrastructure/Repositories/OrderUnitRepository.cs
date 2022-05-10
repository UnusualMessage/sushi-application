using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class OrderUnitRepository : Repository<OrderUnit>, IOrderUnitRepository
    {
        public OrderUnitRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<OrderUnit> UpdateAsync(OrderUnit entity)
        {
            throw new NotImplementedException();
        }
    }
}

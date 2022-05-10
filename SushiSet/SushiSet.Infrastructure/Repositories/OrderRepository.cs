using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class OrderRepository : Repository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override async Task<IEnumerable<Order>> GetAllAsync()
        {
            return await _applicationContext.Orders
                .Include(e => e.OrderUnits)
                    .ThenInclude(e => e.Item)
                        .ThenInclude(e => e.Category)
                .Include(e => e.Shop)
                .Include(e => e.Customer)
                .Include(e => e.City)
                .Include(e => e.Courier)
                .ToListAsync();
        }

        public override async Task<Order> GetByIdAsync(Guid id)
        {
            return await _applicationContext.Orders
                .Include(e => e.OrderUnits)
                    .ThenInclude(e => e.Item)
                        .ThenInclude(e => e.Category)
                .Include(e => e.Shop)
                .Include(e => e.Customer)
                .Include(e => e.City)
                .Include(e => e.Courier)
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        public override async Task<Order> UpdateAsync(Order entity)
        {
            Order selected = await _applicationContext.Set<Order>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
    }
}

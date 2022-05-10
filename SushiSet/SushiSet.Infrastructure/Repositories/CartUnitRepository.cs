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
    public class CartUnitRepository : Repository<CartUnit>, ICartUnitRepository
    {
        public CartUnitRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override async Task<IEnumerable<CartUnit>> GetAllAsync()
        {
            return await _applicationContext.CartUnits
                .Include(e => e.User)
                .Include(e => e.Item)
                    .ThenInclude(e => e.Category)
                .ToListAsync();
        }

        public override async Task<CartUnit> GetByIdAsync(Guid id)
        {
            return await _applicationContext.CartUnits
                .Include(e => e.User)
                .Include(e => e.Item)
                    .ThenInclude(e => e.Category)
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        public override async Task<CartUnit> UpdateAsync(CartUnit entity)
        {
            CartUnit selected = await _applicationContext.Set<CartUnit>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
    }
}

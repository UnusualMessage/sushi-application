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
    public class ItemRepository : Repository<Item>, IItemRepository
    {
        public ItemRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override async Task<IEnumerable<Item>> GetAllAsync()
        {
            return await _applicationContext.Items
                .Include(e => e.Category)
                .ToListAsync();
        }

        public override async Task<Item> GetByIdAsync(Guid id)
        {
            return await _applicationContext.Items
                .Include(e => e.Category)
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        public override async Task<Item> UpdateAsync(Item entity)
        {
            Item selected = await _applicationContext.Set<Item>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
    }
}

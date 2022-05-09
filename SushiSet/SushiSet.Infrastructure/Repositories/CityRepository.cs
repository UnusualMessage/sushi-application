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
    public class CityRepository : Repository<City>, ICityRepository
    {
        public CityRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override async Task<IEnumerable<City>> GetAllAsync()
        {
            return await _applicationContext.Cities
                .Include(e => e.Shops)
                .ToListAsync();
        }

        public override async Task<City> GetByIdAsync(Guid id)
        {
            return await _applicationContext.Cities
                .Include(e => e.Shops)
                .FirstOrDefaultAsync(e => e.Id == id);
        }

        public async override Task<City> UpdateAsync(City entity)
        {
            City selected = await _applicationContext.Set<City>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
    }
}

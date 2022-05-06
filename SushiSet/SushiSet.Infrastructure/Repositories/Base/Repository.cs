using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Base;
using SushiSet.Core.Interfaces.Repositories.Base;
using SushiSet.Infrastructure.Context;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories.Base
{
    public abstract class Repository<T> : IRepository<T> where T : Entity
    {
        protected ApplicationContext _applicationContext;

        public Repository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public virtual async Task<T> AddAsync(T entity)
        {
            await _applicationContext.Set<T>().AddAsync(entity);
            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }

        public virtual async Task<T> DeleteByIdAsync(Guid id)
        {
            T entity = await _applicationContext.Set<T>().FindAsync(id);
            _applicationContext.Set<T>().Remove(entity);
            await _applicationContext.SaveChangesAsync();

            return entity;
        }

        public virtual async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _applicationContext.Set<T>().ToListAsync();
        }

        public virtual async Task<T> GetByIdAsync(Guid id)
        {
            return await _applicationContext.Set<T>().FindAsync(id);
        }

        public abstract Task<T> UpdateAsync(T entity);
    }
}

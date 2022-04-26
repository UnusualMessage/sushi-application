using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using SushiSet.Core.Entities.Base;

namespace SushiSet.Core.Interfaces.Repositories.Base
{
    public interface IRepository<T> where T : Entity
    {
        public Task<IEnumerable<T>> GetAllAsync();
        public Task<T> GetByIdAsync(Guid id);
        public Task<T> AddAsync(T entity);
        public Task<T> UpdateAsync(T entity, string properties);
        public Task<T> DeleteByIdAsync(Guid id);
    }
}

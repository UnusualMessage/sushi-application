﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using SushiSet.Core.Entities.Base;

namespace SushiSet.Core.Interfaces.Repositories.Base
{
    public interface IRepository<T> where T : Entity
    {
        public Task<IEnumerable<T>> GetAllAsync();
        public Task<T> GetByIdAsync(Guid id);
        public Task<ICollection<T>> GetAllByIdsAsync(IEnumerable<Guid> ids);
        public Task<T> AddAsync(T entity);
        public Task<T> UpdateAsync(T entity);
        public Task<T> DeleteByIdAsync(Guid id);
    }
}

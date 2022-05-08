using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Core.Interfaces.Repositories
{
    public interface ICategoryRepository : IRepository<Category>
    {
        public Task<Category> GetByNameAsync(string name);
    }
}

using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CategoryRepository : Repository<Category>, ICategoryRepository
    {
        public CategoryRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public async Task<Category> GetByNameAsync(string name)
        {
            return await _applicationContext.Set<Category>().FirstOrDefaultAsync(e => e.Name.ToLower() == name.ToLower());
        }

        public override async Task<Category> UpdateAsync(Category entity)
        {
            Category selectedCategory = await _applicationContext.Set<Category>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selectedCategory.Set(entity);

            await _applicationContext.SaveChangesAsync();

            return await GetByIdAsync(entity.Id);
        }
    }
}

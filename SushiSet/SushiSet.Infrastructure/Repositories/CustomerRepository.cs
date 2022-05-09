using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Linq;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public async Task<Customer> GetCustomerByName(string name)
        {
            return await _applicationContext.Set<Customer>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(e => e.Name == name);
        }

        public async Task<Customer> GetCustomerByToken(string token)
        {
            return await _applicationContext.Set<Customer>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));
        }

        public override async Task<Customer> UpdateAsync(Customer entity)
        {
            Customer selected = await _applicationContext.Set<Customer>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();
            return selected;
        }
    }
}

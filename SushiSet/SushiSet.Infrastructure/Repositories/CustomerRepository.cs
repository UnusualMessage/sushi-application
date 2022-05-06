using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CustomerRepository : Repository<Customer>, ICustomerRepository
    {
        public CustomerRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<Customer> UpdateAsync(Customer entity)
        {
            throw new System.NotImplementedException();
        }
    }
}

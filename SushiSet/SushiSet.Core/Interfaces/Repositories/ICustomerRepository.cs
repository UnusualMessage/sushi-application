using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Core.Interfaces.Repositories
{
    public interface ICustomerRepository : IRepository<Customer>
    {
        public Task<Customer> GetCustomerByName(string name);

        public Task<Customer> GetCustomerByToken(string token);
    }
}

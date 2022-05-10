using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Core.Interfaces.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        public Task<User> GetUserByName(string name);

        public Task<User> GetUserByToken(string token);
    }
}

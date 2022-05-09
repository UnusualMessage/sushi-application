using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Core.Interfaces.Repositories
{
    public interface IAdministratorRepository : IRepository<Administrator>
    {
        public Task<Administrator> GetAdminByName(string name);

        public Task<Administrator> GetAdminByToken(string token);
    }
}

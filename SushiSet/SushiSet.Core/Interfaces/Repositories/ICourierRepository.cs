using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Core.Interfaces.Repositories
{
    public interface ICourierRepository : IRepository<Courier>
    {
        public Task<Courier> GetCourierByName(string name);

        public Task<Courier> GetCourierByToken(string token);
    }
}

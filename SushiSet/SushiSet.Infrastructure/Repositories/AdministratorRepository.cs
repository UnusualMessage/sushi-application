using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class AdministratorRepository : Repository<Administrator>, IAdministratorRepository
    {
        public AdministratorRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<Administrator> UpdateAsync(Administrator entity)
        {
            throw new System.NotImplementedException();
        }
    }
}

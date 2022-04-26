using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CourierRepository : Repository<Courier>, ICourierRepository
    {
        public CourierRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<Courier> UpdateAsync(Courier entity, string properties)
        {
            throw new System.NotImplementedException();
        }
    }
}

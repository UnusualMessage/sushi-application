using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CityRepository : Repository<City>, ICityRepository
    {
        public CityRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<City> UpdateAsync(City entity, string properties)
        {
            throw new System.NotImplementedException();
        }
    }
}

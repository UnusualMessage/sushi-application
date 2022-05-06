using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class AboutRepository : Repository<About>, IAboutRepository
    {
        public AboutRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<About> UpdateAsync(About entity)
        {
            throw new System.NotImplementedException();
        }
    }
}

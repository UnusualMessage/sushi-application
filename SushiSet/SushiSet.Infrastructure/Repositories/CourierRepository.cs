using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Linq;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class CourierRepository : Repository<Courier>, ICourierRepository
    {
        public CourierRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public async Task<Courier> GetCourierByName(string name)
        {
            return await _applicationContext.Set<Courier>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(e => e.Name == name);
        }

        public async Task<Courier> GetCourierByToken(string token)
        {
            return await _applicationContext.Set<Courier>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));
        }

        public override async Task<Courier> UpdateAsync(Courier entity)
        {
            Courier selected = await _applicationContext.Set<Courier>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();
            return selected;
        }
    }
}

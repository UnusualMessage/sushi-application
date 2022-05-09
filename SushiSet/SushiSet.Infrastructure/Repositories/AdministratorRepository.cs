using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Linq;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class AdministratorRepository : Repository<Administrator>, IAdministratorRepository
    {
        public AdministratorRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public async Task<Administrator> GetAdminByName(string name)
        {
            return await _applicationContext.Set<Administrator>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(e => e.Name == name);
        }

        public async Task<Administrator> GetAdminByToken(string token)
        {
            return await _applicationContext.Set<Administrator>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));
        }

        public override async Task<Administrator> UpdateAsync(Administrator entity)
        {
            Administrator selected = await _applicationContext.Set<Administrator>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();
            return selected;
        }
    }
}

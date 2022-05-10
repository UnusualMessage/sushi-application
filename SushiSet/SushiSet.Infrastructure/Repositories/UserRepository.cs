using Microsoft.EntityFrameworkCore;

using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Linq;
using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public async Task<User> GetUserByName(string name)
        {
            return await _applicationContext.Set<User>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(e => e.Name == name);
        }

        public async Task<User> GetUserByToken(string token)
        {
            return await _applicationContext.Set<User>()
                .Include(x => x.RefreshTokens)
                .FirstOrDefaultAsync(u => u.RefreshTokens.Any(t => t.Token == token));
        }

        public override async Task<User> UpdateAsync(User entity)
        {
            User selected = await _applicationContext.Set<User>().FirstOrDefaultAsync(e => e.Id == entity.Id);

            selected.Set(entity);

            await _applicationContext.SaveChangesAsync();
            return selected;
        }
    }
}

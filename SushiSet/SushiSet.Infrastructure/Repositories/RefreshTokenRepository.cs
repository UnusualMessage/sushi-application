using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Infrastructure.Context;
using SushiSet.Infrastructure.Repositories.Base;

using System.Threading.Tasks;

namespace SushiSet.Infrastructure.Repositories
{
    public class RefreshTokenRepository : Repository<RefreshToken>, IRefreshTokenRepository
    {
        public RefreshTokenRepository(ApplicationContext applicationContext) : base(applicationContext)
        {
        }

        public override Task<RefreshToken> UpdateAsync(RefreshToken entity, string properties)
        {
            throw new System.NotImplementedException();
        }
    }
}

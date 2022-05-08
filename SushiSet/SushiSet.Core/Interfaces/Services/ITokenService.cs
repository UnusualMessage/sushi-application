using SushiSet.Core.Entities;
using SushiSet.Core.Entities.Base;

namespace SushiSet.Core.Interfaces.Services
{
    public interface ITokenService
    {
        public AccessToken GetGeneratedAccessToken(User user);
        public RefreshToken GetGeneratedRefreshToken(string ipAddress);
    }
}

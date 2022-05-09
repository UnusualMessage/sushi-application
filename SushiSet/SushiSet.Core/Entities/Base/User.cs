using System.Collections.Generic;

namespace SushiSet.Core.Entities.Base
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
    }
}

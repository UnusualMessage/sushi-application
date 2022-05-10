using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class User : Entity
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }

        public ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

        public ICollection<Order> Orders { get; set; } = new List<Order>();

        public ICollection<Order> Deliveries { get; set; } = new List<Order>();

        public ICollection<Item> Items { get; set; } = new List<Item>();

        public void Set(User user)
        {
            Name = user.Name;
            Password = user.Password;
            Role = user.Role;
        }
    }
}

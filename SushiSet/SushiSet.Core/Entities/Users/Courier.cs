using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities.Users
{
    public class Courier : User
    {
        public ICollection<Order> Orders { get; set; }

        public Courier()
        {
            Role = nameof(Courier);
        }

        public void Set(Courier courier)
        {
            Name = courier.Name;
            Password = courier.Password;
            RefreshTokens = courier.RefreshTokens;
        }

    }
}

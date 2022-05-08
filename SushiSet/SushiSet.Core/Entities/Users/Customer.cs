using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities.Users
{
    public class Customer : User
    {
        public ICollection<Order> Orders { get; set; } = new List<Order>();

        public ICollection<Cart> Carts { get; set; } = new List<Cart>();

        public Customer()
        {
            Role = nameof(Customer);
        }
    }
}

using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities.Users
{
    public class Customer : User
    {
        public ICollection<Order> Orders { get; set; } = new List<Order>();

        public ICollection<Item> Items { get; set; } = new List<Item>();

        public Customer()
        {
            Role = nameof(Customer);
        }

        public void Set(Customer customer)
        {
            Name = customer.Name;
            Password = customer.Password;
            RefreshTokens = customer.RefreshTokens;
        }
    }
}

using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;

using System;
using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class Item : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PicturePath { get; set; }

        public ICollection<Customer> Customers { get; set; } = new List<Customer>();

        public ICollection<Order> Orders { get; set; } = new List<Order>();

        public Guid CategoryId { get; set; }
        public Category Category { get; set; }

        public void Set(Item item)
        {
            Name = item.Name;
            Description = item.Description;
            Price = item.Price;
            PicturePath = item.PicturePath;
            CategoryId = item.CategoryId;
        }
    }
}

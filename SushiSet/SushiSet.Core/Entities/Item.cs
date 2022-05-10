using SushiSet.Core.Entities.Base;

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

        public ICollection<Cart> Carts { get; set; } = new List<Cart>();

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

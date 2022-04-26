using SushiSet.Core.Entities.Base;

using System;

namespace SushiSet.Core.Entities
{
    public class Item : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string Weight { get; set; }
        public decimal Price { get; set; }
        public Guid? CategoryId { get; set; }
        public Category Category { get; set; }
    }
}

using SushiSet.Core.Entities.Base;

using System;

namespace SushiSet.Core.Entities
{
    public class OrderUnit : Entity
    {
        public Guid ItemId { get; set; }
        public Item Item { get; set; }

        public Guid OrderId { get; set; }
        public Order Order { get; set; }

        public int Count { get; set; }
    }
}

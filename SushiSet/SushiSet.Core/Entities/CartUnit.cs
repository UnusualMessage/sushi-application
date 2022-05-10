using SushiSet.Core.Entities.Base;

using System;

namespace SushiSet.Core.Entities
{
    public class CartUnit : Entity
    {
        public Guid ItemId { get; set; }
        public Item Item { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }

        public int Count { get; set; }

        public void Set(CartUnit entity)
        {
            Count = entity.Count;
        }
    }
}

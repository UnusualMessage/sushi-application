using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;

using System;

namespace SushiSet.Core.Entities
{
    public class Cart : Entity
    {
        public Guid? ItemId { get; set; }
        public Item Item { get; set; }

        public Guid? CustomerId { get; set; }
        public Customer Customer { get; set; }

        public int Count { get; set; }
    }
}

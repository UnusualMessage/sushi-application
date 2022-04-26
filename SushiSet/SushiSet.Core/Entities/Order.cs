using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;

using System;
using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class Order : Entity
    {
        public string Title { get; set; }

        public ICollection<Item> Items { get; set; }

        public Guid? CustomerId { get; set; }
        public Customer Customer { get; set; }

        public Guid? CourierId { get; set; }
        public Courier Courier { get; set; }
    }
}

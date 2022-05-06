using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;

using System;
using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class Order : Entity
    {
        public string Title { get; set; }
        public bool Status { get; set; }
        public DateTime Created { get; set; }

        public Guid? ShopId { get; set; }
        public Shop Shop { get; set; }

        public ICollection<OrderUnit> OrderUnits { get; set; } = new List<OrderUnit>();

        public Guid? CustomerId { get; set; }
        public Customer Customer { get; set; }

        public Guid? CourierId { get; set; }
        public Courier Courier { get; set; }
    }
}

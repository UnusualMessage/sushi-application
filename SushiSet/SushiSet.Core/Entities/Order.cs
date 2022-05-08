using SushiSet.Core.Entities.Base;
using SushiSet.Core.Entities.Users;

using System;
using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class Order : Entity
    {
        public string Title { get; set; }
        public string Status { get; set; }
        public DateTime Created { get; set; }

        public ICollection<OrderUnit> OrderUnits { get; set; } = new List<OrderUnit>();

        public Guid? ShopId { get; set; }
        public Shop Shop { get; set; }

        public Guid? CityId { get; set; }
        public City City { get; set; }

        public Guid? CustomerId { get; set; }
        public Customer Customer { get; set; }

        public Guid? CourierId { get; set; }
        public Courier Courier { get; set; }

        public void Set(Order order)
        {
            Title = order.Title;
            Status = order.Status;
            Created = order.Created;
            OrderUnits = order.OrderUnits;
        }
    }
}

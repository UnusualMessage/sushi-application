using SushiSet.Core.Entities.Base;

using System;
using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class Shop : Entity
    {
        public string Address { get; set; }

        public Guid? CityId { get; set; }
        public City City { get; set; }

        public ICollection<Order> Orders { get; set; }
        
        public void Set(Shop shop)
        {
            Address = shop.Address;
        }
    }
}

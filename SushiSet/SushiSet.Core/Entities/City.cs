using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities
{
    public class City : Entity
    {
        public string Name { get; set; }

        public ICollection<Shop> Shops { get; set; } = new List<Shop>();

        public void Set(City city)
        {
            Name = city.Name;
        }
    }
}

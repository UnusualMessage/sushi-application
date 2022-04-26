using SushiSet.Core.Entities.Base;

using System.Collections.Generic;

namespace SushiSet.Core.Entities.Users
{
    public class Courier : User
    {
        public ICollection<Order> Orders { get; set; }
    }
}

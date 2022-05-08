using SushiSet.Application.Responses.Base;
using SushiSet.Core.Entities;

using System;
using System.Collections.Generic;

namespace SushiSet.Application.Responses.OrderResponses
{
    public class OrderResponse : Response
    {
        public string Title { get; set; }
        public string Status { get; set; }
        public DateTime Created { get; set; }
        public ICollection<OrderUnit> OrderUnits { get; set; }
    }
}

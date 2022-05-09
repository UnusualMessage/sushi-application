using SushiSet.Application.Responses.Base;
using SushiSet.Application.Responses.CityResponses;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Application.Responses.ShopResponses;

using System;
using System.Collections.Generic;

namespace SushiSet.Application.Responses.OrderResponses
{
    public class OrderResponse : Response
    {
        public string Status { get; set; }
        public DateTime Created { get; set; }
        public decimal TotalPrice { get; set; }
        public IEnumerable<ItemResponse> Items { get; set; }
        public Guid? CustomerId { get; set; }
        public Guid? CourierId { get; set; }
        public ShopResponse Shop { get; set; }
        public CityResponse City { get; set; }
    }
}

using Sieve.Attributes;

using SushiSet.Application.Responses.Base;

using System;

namespace SushiSet.Application.Responses.ShopResponses
{
    public class ShopResponse : Response
    {
        [Sieve(CanFilter = true, CanSort = true)]
        public string Address { get; set; }

        [Sieve(CanFilter = true, CanSort = true)]
        public Guid CityId { get; set; }
    }
}

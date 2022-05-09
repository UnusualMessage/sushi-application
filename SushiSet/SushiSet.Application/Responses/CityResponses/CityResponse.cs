using SushiSet.Application.Responses.Base;
using SushiSet.Application.Responses.ShopResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Responses.CityResponses
{
    public class CityResponse : Response
    {
        public string Name { get; set; }

        public IEnumerable<ShopResponse> Shops { get; set; } 
    }
}

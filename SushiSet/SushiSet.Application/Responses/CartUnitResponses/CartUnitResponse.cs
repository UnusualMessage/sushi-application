using SushiSet.Application.Responses.Base;
using SushiSet.Application.Responses.ItemResponses;

namespace SushiSet.Application.Responses.CartUnitResponses
{
    public class CartUnitResponse : Response
    {
        public ItemResponse Item { get; set; }

        public int Count { get; set; }
    }
}

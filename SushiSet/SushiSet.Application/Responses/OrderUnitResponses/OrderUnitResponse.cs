using SushiSet.Application.Responses.Base;
using SushiSet.Application.Responses.ItemResponses;

namespace SushiSet.Application.Responses.OrderUnitResponses
{
    public class OrderUnitResponse : Response
    {
        public ItemResponse Item { get; set; }
        public int Count { get; set; }
    }
}

using MediatR;

using SushiSet.Application.Responses.OrderResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.OrderQueries
{
    public class GetOrders : IRequest<IEnumerable<OrderResponse>>
    {
    }
}

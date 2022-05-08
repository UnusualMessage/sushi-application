using MediatR;

using SushiSet.Application.Responses.ItemResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.ItemQueries
{
    public class GetItems : IRequest<IEnumerable<ItemResponse>>
    {
    }
}

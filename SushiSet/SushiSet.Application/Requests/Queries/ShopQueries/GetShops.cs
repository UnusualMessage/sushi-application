using MediatR;

using SushiSet.Application.Responses.ShopResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.ShopQueries
{
    public class GetShops : IRequest<IEnumerable<ShopResponse>>
    {
    }
}

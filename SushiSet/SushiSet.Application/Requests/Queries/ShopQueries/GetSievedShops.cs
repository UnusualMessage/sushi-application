using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.ShopResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.ShopQueries
{
    public class GetSievedShops : SievedQuery, IRequest<IEnumerable<ShopResponse>>
    {
        public GetSievedShops(SieveModel model) : base(model)
        {
        }
    }
}

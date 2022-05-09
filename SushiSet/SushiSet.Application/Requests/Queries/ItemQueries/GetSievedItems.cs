using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.ItemResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.ItemQueries
{
    public class GetSievedItems : SievedQuery, IRequest<IEnumerable<ItemResponse>>
    {
        public GetSievedItems(SieveModel model) : base(model)
        {
        }
    }
}

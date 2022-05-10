using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.CartUnitResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CartUnitQueries
{
    public class GetSievedCartUnits : SievedQuery, IRequest<IEnumerable<CartUnitResponse>>
    {
        public GetSievedCartUnits(SieveModel model) : base(model)
        {
        }
    }
}

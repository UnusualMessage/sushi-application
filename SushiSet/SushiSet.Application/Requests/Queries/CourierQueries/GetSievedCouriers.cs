using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.CourierResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CourierQueries
{
    public class GetSievedCouriers : SievedQuery, IRequest<IEnumerable<CourierResponse>>
    {
        public GetSievedCouriers(SieveModel model) : base(model)
        {
        }
    }
}

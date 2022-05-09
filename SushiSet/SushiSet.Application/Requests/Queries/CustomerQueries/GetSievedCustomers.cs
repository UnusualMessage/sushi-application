using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.CustomerResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CustomerQueries
{
    public class GetSievedCustomers : SievedQuery, IRequest<IEnumerable<CustomerResponse>>
    {
        public GetSievedCustomers(SieveModel model) : base(model)
        {
        }
    }
}

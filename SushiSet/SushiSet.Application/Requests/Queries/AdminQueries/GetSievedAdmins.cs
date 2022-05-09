using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.AdminResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.AdminQueries
{
    public class GetSievedAdmins : SievedQuery, IRequest<IEnumerable<AdminResponse>>
    {
        public GetSievedAdmins(SieveModel model) : base(model)
        {
        }
    }
}

using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.UserResponses;
using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.UserQueries
{
    public class GetSievedUsers : SievedQuery, IRequest<IEnumerable<UserResponse>>
    {
        public GetSievedUsers(SieveModel model) : base(model)
        {
        }
    }
}

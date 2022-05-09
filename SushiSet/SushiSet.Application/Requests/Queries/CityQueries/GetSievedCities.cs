using MediatR;
using Sieve.Models;

using SushiSet.Application.Requests.Queries.Base;
using SushiSet.Application.Responses.CityResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CityQueries
{
    public class GetSievedCities : SievedQuery, IRequest<IEnumerable<CityResponse>>
    {
        public GetSievedCities(SieveModel model) : base(model)
        {
        }
    }
}

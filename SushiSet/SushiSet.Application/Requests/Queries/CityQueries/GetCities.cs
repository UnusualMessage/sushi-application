using MediatR;

using SushiSet.Application.Responses.CityResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CityQueries
{
    public class GetCities : IRequest<IEnumerable<CityResponse>>
    {
    }
}

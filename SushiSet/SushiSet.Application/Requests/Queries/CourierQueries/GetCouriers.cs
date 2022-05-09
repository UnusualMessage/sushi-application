using MediatR;

using SushiSet.Application.Responses.CourierResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CourierQueries
{
    public class GetCouriers : IRequest<IEnumerable<CourierResponse>>
    {
    }
}

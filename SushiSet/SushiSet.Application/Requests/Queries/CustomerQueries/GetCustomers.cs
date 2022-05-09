using MediatR;

using SushiSet.Application.Responses.CustomerResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CustomerQueries
{
    public class GetCustomers : IRequest<IEnumerable<CustomerResponse>>
    {
    }
}

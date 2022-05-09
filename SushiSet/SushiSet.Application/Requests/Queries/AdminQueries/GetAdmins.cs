using MediatR;

using SushiSet.Application.Responses.AdminResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.AdminQueries
{
    public class GetAdmins : IRequest<IEnumerable<AdminResponse>>
    {
    }
}

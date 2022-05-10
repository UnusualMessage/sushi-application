using MediatR;
using SushiSet.Application.Responses.UserResponses;
using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.UserQueries
{
    public class GetUsers : IRequest<IEnumerable<UserResponse>>
    {
    }
}

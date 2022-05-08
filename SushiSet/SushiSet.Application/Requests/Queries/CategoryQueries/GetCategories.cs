using MediatR;

using SushiSet.Application.Responses.CategoryResponses;

using System.Collections.Generic;

namespace SushiSet.Application.Requests.Queries.CategoryQueries
{
    public class GetCategories : IRequest<IEnumerable<CategoryResponse>>
    {

    }
}

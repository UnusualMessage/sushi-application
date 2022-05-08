using MediatR;

using SushiSet.Application.Responses.CategoryResponses;

using System;

namespace SushiSet.Application.Requests.Queries.CategoryQueries
{
    public class GetCategoryById : IRequest<CategoryResponse>
    {
        public Guid Id { get; set; }

        public GetCategoryById(Guid id)
        {
            Id = id;
        }
    }
}

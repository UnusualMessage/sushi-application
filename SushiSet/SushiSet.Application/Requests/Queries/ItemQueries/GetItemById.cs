using MediatR;

using SushiSet.Application.Responses.ItemResponses;

using System;

namespace SushiSet.Application.Requests.Queries.ItemQueries
{
    public class GetItemById : IRequest<ItemResponse>
    {
        public Guid Id { get; set; }

        public GetItemById(Guid id)
        {
            Id = id;
        }
    }
}

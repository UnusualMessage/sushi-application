using MediatR;

using SushiSet.Application.Responses.OrderResponses;

using System;

namespace SushiSet.Application.Requests.Queries.OrderQueries
{
    public class GetOrderById : IRequest<OrderResponse>
    {
        public Guid Id { get; set; }

        public GetOrderById(Guid id)
        {
            Id = id;
        }
    }
}

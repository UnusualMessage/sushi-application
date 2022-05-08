using MediatR;

using SushiSet.Application.Responses.OrderResponses;

using System;

namespace SushiSet.Application.Requests.Commands.OrderCommands
{
    public class DeleteOrder : IRequest<OrderResponse>
    {
        public Guid Id { get; set; }

        public DeleteOrder(Guid id)
        {
            Id = id;
        }
    }
}

using MediatR;

using SushiSet.Application.Responses.OrderResponses;

using System;
using System.Collections.Generic;

namespace SushiSet.Application.Requests.Commands.OrderCommands
{
    public class CreateOrder : IRequest<OrderResponse>
    {
        public DateTime Created { get; set; }
        public ICollection<Guid> ItemIds { get; set; }
    }
}

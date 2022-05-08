using MediatR;

using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Entities;

using System;
using System.Collections.Generic;

namespace SushiSet.Application.Requests.Commands.OrderCommands
{
    public class CreateOrder : IRequest<OrderResponse>
    {
        public string Title { get; set; }
        public string Status { get; set; }
        public DateTime Created { get; set; }
        public ICollection<OrderUnit> OrderUnits { get; set; }
    }
}

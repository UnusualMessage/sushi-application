using MediatR;

using SushiSet.Application.Responses.OrderResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.OrderCommands
{
    public class UpdateOrder : IRequest<OrderResponse>
    {
        [Required]
        public Guid Id { get; set; }

        public string Status { get; set; }
    }
}

using MediatR;

using SushiSet.Application.Responses.CartUnitResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CartUnitCommands
{
    public class UpdateCartUnit : IRequest<CartUnitResponse>
    {
        [Required]
        public Guid Id { get; set; }
        
        public int Count { get; set; }
    }
}

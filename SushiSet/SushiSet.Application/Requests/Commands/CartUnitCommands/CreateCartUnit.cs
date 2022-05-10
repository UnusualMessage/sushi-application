using MediatR;

using SushiSet.Application.Responses.CartUnitResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CartUnitCommands
{
    public class CreateCartUnit : IRequest<CartUnitResponse>
    {
        [Required]
        public Guid ItemId { get; set; }

        [Required]
        public Guid UserId { get; set; }

        [Required]
        public int Count { get; set; }
    }
}

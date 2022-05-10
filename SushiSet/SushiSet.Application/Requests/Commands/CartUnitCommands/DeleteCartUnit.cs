using MediatR;

using SushiSet.Application.Responses.CartUnitResponses;

using System;

namespace SushiSet.Application.Requests.Commands.CartUnitCommands
{
    public class DeleteCartUnit : IRequest<CartUnitResponse>
    {
        public Guid Id { get; set; }

        public DeleteCartUnit(Guid id)
        {
            Id = id;
        }
    }
}

using MediatR;

using SushiSet.Application.Responses.ShopResponses;

using System;

namespace SushiSet.Application.Requests.Commands.ShopCommands
{
    public class DeleteShop : IRequest<ShopResponse>
    {
        public Guid Id { get; set; }

        public DeleteShop(Guid id)
        {
            Id = id;
        }
    }
}

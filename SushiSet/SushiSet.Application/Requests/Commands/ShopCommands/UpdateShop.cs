using MediatR;

using SushiSet.Application.Responses.ShopResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.ShopCommands
{
    public class UpdateShop : IRequest<ShopResponse>
    {
        [Required]
        public Guid Id { get; set; }

        public string Address { get; set; }
    }
}

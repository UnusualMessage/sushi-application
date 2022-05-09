using MediatR;

using SushiSet.Application.Responses.ShopResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.ShopCommands
{
    public class CreateShop : IRequest<ShopResponse>
    {
        [Required]
        public string Address { get; set; }
    }
}

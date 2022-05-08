using MediatR;

using Microsoft.AspNetCore.Http;

using SushiSet.Application.Responses.ItemResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.ItemCommands
{
    public class CreateItem : IRequest<ItemResponse>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public IFormFile Picture { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public string Category { get; set; }

        public string Destination { get; set; }
    }
}

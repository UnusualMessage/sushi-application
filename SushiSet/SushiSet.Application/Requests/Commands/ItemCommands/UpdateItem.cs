using MediatR;

using Microsoft.AspNetCore.Http;

using SushiSet.Application.Responses.ItemResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.ItemCommands
{
    public class UpdateItem : IRequest<ItemResponse>
    {
        [Required]
        public Guid Id { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public IFormFile Picture { get; set; }

        public string Destination { get; set; }
    }
}

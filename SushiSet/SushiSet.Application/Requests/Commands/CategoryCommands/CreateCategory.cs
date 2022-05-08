using MediatR;

using Microsoft.AspNetCore.Http;

using SushiSet.Application.Responses.CategoryResponses;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CategoryCommands
{
    public class CreateCategory : IRequest<CategoryResponse>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public IFormFile Picture { get; set; }
    }
}

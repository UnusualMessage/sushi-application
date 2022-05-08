using MediatR;

using Microsoft.AspNetCore.Http;

using SushiSet.Application.Responses.CategoryResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CategoryCommands
{
    public class UpdateCategory : IRequest<CategoryResponse>
    {
        [Required]
        public Guid Id { get; set; }
         
        public string Name { get; set; }
        public IFormFile Picture { get; set; }
    }
}

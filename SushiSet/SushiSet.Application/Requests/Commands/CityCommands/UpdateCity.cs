using MediatR;

using SushiSet.Application.Responses.CityResponses;

using System;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CityCommands
{
    public class UpdateCity : IRequest<CityResponse>
    {
        [Required]
        public Guid Id { get; set; }

        public string Name { get; set; }
    }
}

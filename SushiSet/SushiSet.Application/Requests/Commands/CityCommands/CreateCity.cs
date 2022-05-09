using MediatR;

using SushiSet.Application.Responses.CityResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CityCommands
{
    public class CreateCity : IRequest<CityResponse>
    {
        [Required]
        public string Name { get; set; }
    }
}

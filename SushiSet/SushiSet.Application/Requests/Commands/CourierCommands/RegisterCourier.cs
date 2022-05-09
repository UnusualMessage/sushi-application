using MediatR;

using SushiSet.Application.Responses.CourierResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CourierCommands
{
    public class RegisterCourier : IRequest<AuthenticateCourierResponse>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }

        public string IpAddress { get; set; }
    }
}

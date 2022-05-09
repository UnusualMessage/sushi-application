using MediatR;

using SushiSet.Application.Responses.CourierResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CourierCommands
{
    public class RefreshCourier : IRequest<AuthenticateCourierResponse>
    {
        [Required]
        public string RefreshToken { get; set; }

        public string IpAddress { get; set; }
    }
}

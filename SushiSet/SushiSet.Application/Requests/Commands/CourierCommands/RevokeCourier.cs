using MediatR;

using SushiSet.Application.Responses.CourierResponses;

namespace SushiSet.Application.Requests.Commands.CourierCommands
{
    public class RevokeCourier : IRequest<RevokeCourierResponse>
    {
        public string RefreshToken { get; set; }
        public string IpAddress { get; set; }
    }
}

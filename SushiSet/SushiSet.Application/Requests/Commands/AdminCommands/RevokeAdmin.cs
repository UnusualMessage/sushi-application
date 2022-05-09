using MediatR;

using SushiSet.Application.Responses.AdminResponses;

namespace SushiSet.Application.Requests.Commands.AdminCommands
{
    public class RevokeAdmin : IRequest<RevokeAdminResponse>
    {
        public string RefreshToken { get; set; }
        public string IpAddress { get; set; }
    }
}

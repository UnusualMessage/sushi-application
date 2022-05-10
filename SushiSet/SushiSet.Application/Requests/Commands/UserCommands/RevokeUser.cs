using MediatR;
using SushiSet.Application.Responses.UserResponses;

namespace SushiSet.Application.Requests.Commands.UserCommands
{
    public class RevokeUser : IRequest<RevokeUserResponse>
    {
        public string RefreshToken { get; set; }
        public string IpAddress { get; set; }
    }
}

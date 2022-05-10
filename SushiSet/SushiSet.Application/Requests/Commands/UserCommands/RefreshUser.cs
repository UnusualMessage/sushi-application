using MediatR;
using SushiSet.Application.Responses.UserResponses;

namespace SushiSet.Application.Requests.Commands.UserCommands
{
    public class RefreshUser : IRequest<AuthenticateUserResponse>
    {
        public string RefreshToken { get; set; }

        public string IpAddress { get; set; }
    }
}

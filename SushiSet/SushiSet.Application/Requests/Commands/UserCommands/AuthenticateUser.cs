using MediatR;
using SushiSet.Application.Responses.UserResponses;
using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.UserCommands
{
    public class AuthenticateUser : IRequest<AuthenticateUserResponse>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Role { get; set; }

        public string IpAddress { get; set; }
    }
}

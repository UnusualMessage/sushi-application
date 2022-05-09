using MediatR;

using SushiSet.Application.Responses.AdminResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.AdminCommands
{
    public class AuthenticateAdmin : IRequest<AuthenticateAdminResponse>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }

        public string IpAddress { get; set; }
    }
}

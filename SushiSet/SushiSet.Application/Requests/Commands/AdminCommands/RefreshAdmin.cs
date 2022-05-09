using MediatR;

using SushiSet.Application.Responses.AdminResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.AdminCommands
{
    public class RefreshAdmin : IRequest<AuthenticateAdminResponse>
    {
        [Required]
        public string RefreshToken { get; set; }

        public string IpAddress { get; set; }
    }
}

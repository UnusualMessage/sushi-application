using MediatR;

using SushiSet.Application.Responses.CustomerResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CustomerCommands
{
    public class RegisterCustomer : IRequest<AuthenticateCustomerResponse>
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }

        public string IpAddress { get; set; }
    }
}

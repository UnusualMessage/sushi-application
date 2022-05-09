using MediatR;

using SushiSet.Application.Responses.CustomerResponses;

using System.ComponentModel.DataAnnotations;

namespace SushiSet.Application.Requests.Commands.CustomerCommands
{
    public class RefreshCustomer : IRequest<AuthenticateCustomerResponse>
    {
        [Required]
        public string RefreshToken { get; set; }

        public string IpAddress { get; set; }
    }
}

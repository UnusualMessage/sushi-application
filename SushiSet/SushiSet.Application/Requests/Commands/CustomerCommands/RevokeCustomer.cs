using MediatR;

using SushiSet.Application.Responses.CustomerResponses;

namespace SushiSet.Application.Requests.Commands.CustomerCommands
{
    public class RevokeCustomer : IRequest<RevokeCustomerResponse>
    {
        public string RefreshToken { get; set; }
        public string IpAddress { get; set; }
    }
}

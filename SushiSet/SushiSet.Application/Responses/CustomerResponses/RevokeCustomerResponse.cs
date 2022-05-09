using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.CustomerResponses
{
    public class RevokeCustomerResponse : Response
    {
        public bool Revoked { get; set; }
    }
}

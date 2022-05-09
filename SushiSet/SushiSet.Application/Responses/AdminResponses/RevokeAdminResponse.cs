using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.AdminResponses
{
    public class RevokeAdminResponse : Response
    {
        public bool Revoked { get; set; }
    }
}

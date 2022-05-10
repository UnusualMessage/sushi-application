using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.UserResponses
{
    public class RevokeUserResponse : Response
    {
        public bool Revoked { get; set; }
    }
}

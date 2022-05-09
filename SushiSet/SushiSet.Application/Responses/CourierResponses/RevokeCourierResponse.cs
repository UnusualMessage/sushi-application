using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.CourierResponses
{
    public class RevokeCourierResponse : Response
    {
        public bool Revoked { get; set; }
    }
}

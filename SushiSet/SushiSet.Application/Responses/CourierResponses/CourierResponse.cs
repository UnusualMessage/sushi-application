using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.CourierResponses
{
    public class CourierResponse : Response
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
    }
}

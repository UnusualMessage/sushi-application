using SushiSet.Application.Responses.Base;
using SushiSet.Core.Entities.Users;

using System.Text.Json.Serialization;

namespace SushiSet.Application.Responses.CourierResponses
{
    public class AuthenticateCourierResponse : Response
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string AccessToken { get; set; }
        public bool Successful { get; set; }

        [JsonIgnore]
        public string RefreshToken { get; set; }

        public AuthenticateCourierResponse()
        {
            Role = nameof(Courier);
        }
    }
}

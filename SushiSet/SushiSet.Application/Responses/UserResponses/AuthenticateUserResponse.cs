using SushiSet.Application.Responses.Base;

using System.Text.Json.Serialization;

namespace SushiSet.Application.Responses.UserResponses
{
    public class AuthenticateUserResponse : Response
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string AccessToken { get; set; }
        public bool Successful { get; set; }

        [JsonIgnore]
        public string RefreshToken { get; set; }
    }
}

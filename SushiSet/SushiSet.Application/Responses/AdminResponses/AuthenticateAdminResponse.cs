using SushiSet.Application.Responses.Base;
using SushiSet.Core.Entities.Users;

using System.Text.Json.Serialization;

namespace SushiSet.Application.Responses.AdminResponses
{
    public class AuthenticateAdminResponse : Response
    {
        public string Name { get; set; }
        public string Password { get; set; }
        public string Role { get; set; }
        public string AccessToken { get; set; }
        public bool Successful { get; set; }

        [JsonIgnore]
        public string RefreshToken { get; set; }

        public AuthenticateAdminResponse()
        {
            Role = nameof(Administrator);
        }
    }
}

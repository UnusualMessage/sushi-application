using Sieve.Attributes;

using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.UserResponses
{
    public class UserResponse : Response
    {
        [Sieve(CanFilter = true, CanSort = true)]
        public string Name { get; set; }

        public string Password { get; set; }

        [Sieve(CanFilter = true, CanSort = true)]
        public string Role { get; set; }
    }
}

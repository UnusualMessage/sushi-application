using SushiSet.Core.Entities.Base;

namespace SushiSet.Core.Entities.Users
{
    public class Administrator : User
    {
        public Administrator()
        {
            Role = nameof(Administrator);
        }
    }
}

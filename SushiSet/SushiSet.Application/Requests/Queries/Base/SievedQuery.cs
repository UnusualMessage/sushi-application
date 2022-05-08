using Sieve.Models;

namespace SushiSet.Application.Requests.Queries.Base
{
    public abstract class SievedQuery
    {
        public SieveModel SieveModel { get; set; }

        public SievedQuery(SieveModel model)
        {
            SieveModel = model;
        }
    }
}

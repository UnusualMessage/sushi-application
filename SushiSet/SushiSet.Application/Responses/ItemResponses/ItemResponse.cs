using Sieve.Attributes;

using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.ItemResponses
{
    public class ItemResponse : Response
    {
        [Sieve(CanFilter = true, CanSort = true)]
        public string Name { get; set; }

        [Sieve(CanFilter = true, CanSort = true)]
        public string Description { get; set; }

        [Sieve(CanFilter = true, CanSort = true)]
        public decimal Price { get; set; }

        [Sieve(CanFilter = true, CanSort = true)]
        public string PicturePath { get; set; }

        [Sieve(CanFilter = true, CanSort = true)]
        public string Category { get; set; } 
    }
}

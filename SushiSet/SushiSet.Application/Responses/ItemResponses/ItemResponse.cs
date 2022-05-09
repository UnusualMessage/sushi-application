using SushiSet.Application.Responses.Base;
using SushiSet.Application.Responses.CategoryResponses;

namespace SushiSet.Application.Responses.ItemResponses
{
    public class ItemResponse : Response
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PicturePath { get; set; }
        public CategoryResponse Category { get; set; } 
    }
}

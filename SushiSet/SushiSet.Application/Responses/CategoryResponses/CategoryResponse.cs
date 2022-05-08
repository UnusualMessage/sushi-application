using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.CategoryResponses
{
    public class CategoryResponse : Response
    {
        public string Name { get; set; }
        public string PicturePath { get; set; }
    }
}

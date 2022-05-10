using SushiSet.Application.Responses.Base;

namespace SushiSet.Application.Responses.CartResponse
{
    public class CartResponse : Response
    {
        public string Name { get; set; }
        public string PicturePath { get; set; }
    }
}

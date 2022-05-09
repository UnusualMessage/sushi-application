using MediatR;

using SushiSet.Application.Responses.ShopResponses;

using System;

namespace SushiSet.Application.Requests.Queries.ShopQueries
{
    public class GetShopById : IRequest<ShopResponse>
    {
        public Guid Id { get; set; }

        public GetShopById(Guid id)
        {
            Id = id;
        }
    }
}

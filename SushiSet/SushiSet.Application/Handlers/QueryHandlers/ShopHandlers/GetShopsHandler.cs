using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.ShopQueries;
using SushiSet.Application.Responses.ShopResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.ShopHandlers
{
    public class GetShopsHandler : IRequestHandler<GetShops, IEnumerable<ShopResponse>>
    {
        private readonly IShopRepository _shopRepository;
        private readonly IMapper _mapper;

        public GetShopsHandler(IShopRepository shopRepository, IMapper mapper)
        {
            _shopRepository = shopRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ShopResponse>> Handle(GetShops request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<ShopResponse>>(await _shopRepository.GetAllAsync());
        }
    }
}

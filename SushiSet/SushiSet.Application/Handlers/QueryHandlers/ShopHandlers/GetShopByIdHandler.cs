using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.ShopQueries;
using SushiSet.Application.Responses.ShopResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.ShopHandlers
{
    public class GetShopByIdHandler : IRequestHandler<GetShopById, ShopResponse>
    {
        private readonly IShopRepository _shopRepository;
        private readonly IMapper _mapper;

        public GetShopByIdHandler(IShopRepository shopRepository, IMapper mapper)
        {
            _shopRepository = shopRepository;
            _mapper = mapper;
        }

        public async Task<ShopResponse> Handle(GetShopById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<ShopResponse>(await _shopRepository.GetByIdAsync(request.Id));
        }
    }
}

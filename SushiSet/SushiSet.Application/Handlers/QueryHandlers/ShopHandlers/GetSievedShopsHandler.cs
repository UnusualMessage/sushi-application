using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.ShopQueries;
using SushiSet.Application.Responses.ShopResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.ShopHandlers
{
    public class GetSievedShopsHandler : IRequestHandler<GetSievedShops, IEnumerable<ShopResponse>>
    {
        private readonly IShopRepository _shopRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedShopsHandler(IShopRepository shopRepository, ISieveProcessor processor)
        {
            _shopRepository = shopRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<ShopResponse>> Handle(GetSievedShops request, CancellationToken cancellationToken)
        {
            IEnumerable<Shop> result = await _shopRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<ShopProfile>();
            });

            IQueryable<ShopResponse> response = result.AsQueryable().ProjectTo<ShopResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

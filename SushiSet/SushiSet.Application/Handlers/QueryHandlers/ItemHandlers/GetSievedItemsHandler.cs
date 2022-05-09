using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.ItemQueries;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.ItemHandlers
{
    public class GetSievedItemsHandler : IRequestHandler<GetSievedItems, IEnumerable<ItemResponse>>
    {
        private readonly IItemRepository _itemRepository;
        private readonly ISieveProcessor _sieveProcessor;
        public GetSievedItemsHandler(IItemRepository itemRepository, ISieveProcessor processor)
        {
            _itemRepository = itemRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<ItemResponse>> Handle(GetSievedItems request, CancellationToken cancellationToken)
        {
            IEnumerable<Item> result = await _itemRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<ItemProfile>();
            });

            IQueryable<ItemResponse> response = result.AsQueryable().ProjectTo<ItemResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

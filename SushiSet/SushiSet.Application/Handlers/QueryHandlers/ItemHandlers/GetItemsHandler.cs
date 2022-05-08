using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.ItemQueries;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.ItemHandlers
{
    public class GetItemsHandler : IRequestHandler<GetItems, IEnumerable<ItemResponse>>
    {
        private readonly IItemRepository _itemRepository;
        private readonly IMapper _mapper;

        public GetItemsHandler(IItemRepository itemRepository, IMapper mapper)
        {
            _itemRepository = itemRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ItemResponse>> Handle(GetItems request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<ItemResponse>>(await _itemRepository.GetAllAsync());
        }
    }
}

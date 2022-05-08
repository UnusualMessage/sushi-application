using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.ItemQueries;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.ItemHandlers
{
    public class GetItemByIdHandler : IRequestHandler<GetItemById, ItemResponse>
    {
        private readonly IItemRepository _itemRepository;
        private readonly IMapper _mapper;

        public GetItemByIdHandler(IItemRepository itemRepository, IMapper mapper)
        {
            _itemRepository = itemRepository;
            _mapper = mapper;
        }

        public async Task<ItemResponse> Handle(GetItemById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<ItemResponse>(await _itemRepository.GetByIdAsync(request.Id));
        }
    }
}

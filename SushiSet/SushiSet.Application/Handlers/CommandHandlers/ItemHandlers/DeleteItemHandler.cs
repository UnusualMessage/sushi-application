using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.ItemCommands;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.ItemHandlers
{
    public class DeleteItemHandler : IRequestHandler<DeleteItem, ItemResponse>
    {
        private readonly IItemRepository _itemRepository;
        private readonly IMapper _mapper;
        private readonly IFileService _fileService;

        public DeleteItemHandler(IItemRepository itemRepository, IMapper mapper, IFileService fileService)
        {
            _itemRepository = itemRepository;
            _mapper = mapper;
            _fileService = fileService;
        }

        public async Task<ItemResponse> Handle(DeleteItem request, CancellationToken cancellationToken)
        {
            return _mapper.Map<ItemResponse>(await _itemRepository.DeleteByIdAsync(request.Id));
        }
    }
}

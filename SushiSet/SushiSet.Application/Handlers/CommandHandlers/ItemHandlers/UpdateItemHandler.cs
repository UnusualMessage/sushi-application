using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.ItemCommands;
using SushiSet.Application.Responses.ItemResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;
using SushiSet.Core.Interfaces.Services;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.ItemHandlers
{
    public class UpdateItemHandler : IRequestHandler<UpdateItem, ItemResponse>
    {
        private readonly IItemRepository _itemRepository;
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;
        private readonly IFileService _fileService;

        public UpdateItemHandler(IItemRepository itemRepository, ICategoryRepository categoryRepository, IMapper mapper, IFileService fileService)
        {
            _itemRepository = itemRepository;
            _categoryRepository = categoryRepository;
            _mapper = mapper;
            _fileService = fileService;
        }

        public async Task<ItemResponse> Handle(UpdateItem request, CancellationToken cancellationToken)
        {
            Item newItem = new()
            {
                Name = request.Name,
                PicturePath = await _fileService.UploadFile(request.Picture, request.Destination),
                Price = request.Price,
                Description = request.Description,
                Category = await _categoryRepository.GetByNameAsync(request.Category)
            };

            return _mapper.Map<ItemResponse>(await _itemRepository.UpdateAsync(newItem));
        }
    }
}

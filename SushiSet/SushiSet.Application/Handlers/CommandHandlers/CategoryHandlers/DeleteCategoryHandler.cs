using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CategoryCommands;
using SushiSet.Application.Responses.CategoryResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CategoryCommands
{
    public class DeleteCategoryHandler : IRequestHandler<DeleteCategory, CategoryResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public DeleteCategoryHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<CategoryResponse> Handle(DeleteCategory request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CategoryResponse>(await _categoryRepository.DeleteByIdAsync(request.Id));
        }
    }
}

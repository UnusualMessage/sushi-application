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
    public class UpdateCategoryHandler : IRequestHandler<UpdateCategory, CategoryResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public UpdateCategoryHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<CategoryResponse> Handle(UpdateCategory request, CancellationToken cancellationToken)
        {
            Category category = _mapper.Map<Category>(request);

            return _mapper.Map<CategoryResponse>(await _categoryRepository.UpdateAsync(category));
        }
    }
}

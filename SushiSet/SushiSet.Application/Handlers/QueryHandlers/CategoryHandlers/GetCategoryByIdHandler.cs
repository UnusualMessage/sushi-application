using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CategoryQueries;
using SushiSet.Application.Responses.CategoryResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CategoryHandlers
{
    public class GetCategoryByIdHandler : IRequestHandler<GetCategoryById, CategoryResponse>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public GetCategoryByIdHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<CategoryResponse> Handle(GetCategoryById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CategoryResponse>(await _categoryRepository.GetByIdAsync(request.Id));
        }
    }
}

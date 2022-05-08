using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CategoryQueries;
using SushiSet.Application.Responses.CategoryResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CategoryHandlers
{
    public class GetCategoriesHandler : IRequestHandler<GetCategories, IEnumerable<CategoryResponse>>
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public GetCategoriesHandler(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CategoryResponse>> Handle(GetCategories request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<CategoryResponse>>(await _categoryRepository.GetAllAsync());
        }
    }
}

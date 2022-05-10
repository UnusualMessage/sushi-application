using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.CartUnitQueries;
using SushiSet.Application.Responses.CartUnitResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CartUnitHandlers
{
    public class GetSievedCartUnitsHandler : IRequestHandler<GetSievedCartUnits, IEnumerable<CartUnitResponse>>
    {
        private readonly ICartUnitRepository _cartUnitRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedCartUnitsHandler(ICartUnitRepository cartUnitRepository, ISieveProcessor processor)
        {
            _cartUnitRepository = cartUnitRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<CartUnitResponse>> Handle(GetSievedCartUnits request, CancellationToken cancellationToken)
        {
            IEnumerable<CartUnit> result = await _cartUnitRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<CartUnitProfile>();
                cfg.AddProfile<ItemProfile>();
            });

            IQueryable<CartUnitResponse> response = result.AsQueryable().ProjectTo<CartUnitResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

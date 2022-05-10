using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CartUnitCommands;
using SushiSet.Application.Responses.CartUnitResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CartUnitHandlers
{
    public class DeleteCartUnitHandler : IRequestHandler<DeleteCartUnit, CartUnitResponse>
    {
        private readonly ICartUnitRepository _cartUnitRepository;
        private readonly IMapper _mapper;

        public DeleteCartUnitHandler(ICartUnitRepository cartUnitRepository, IMapper mapper)
        {
            _cartUnitRepository = cartUnitRepository;
            _mapper = mapper;
        }

        public async Task<CartUnitResponse> Handle(DeleteCartUnit request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CartUnitResponse>(await _cartUnitRepository.DeleteByIdAsync(request.Id));
        }
    }
}

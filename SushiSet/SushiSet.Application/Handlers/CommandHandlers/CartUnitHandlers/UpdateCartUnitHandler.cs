using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.CartUnitCommands;
using SushiSet.Application.Responses.CartUnitResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.CartUnitHandlers
{
    public class UpdateCartUnitHandler : IRequestHandler<UpdateCartUnit, CartUnitResponse>
    {
        private readonly ICartUnitRepository _cartUnitRepository;
        private readonly IMapper _mapper;

        public UpdateCartUnitHandler(ICartUnitRepository cartUnitRepository, IMapper mapper)
        {
            _cartUnitRepository = cartUnitRepository;
            _mapper = mapper;
        }

        public async Task<CartUnitResponse> Handle(UpdateCartUnit request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CartUnitResponse>(await _cartUnitRepository.UpdateAsync(_mapper.Map<CartUnit>(request)));
        }
    }
}

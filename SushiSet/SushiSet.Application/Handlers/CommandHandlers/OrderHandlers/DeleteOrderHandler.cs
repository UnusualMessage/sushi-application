using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.OrderCommands;
using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.OrderHandlers
{
    public class DeleteOrderHandler : IRequestHandler<DeleteOrder, OrderResponse>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public DeleteOrderHandler(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
        }

        public async Task<OrderResponse> Handle(DeleteOrder request, CancellationToken cancellationToken)
        {
            return _mapper.Map<OrderResponse>(await _orderRepository.DeleteByIdAsync(request.Id));
        }
    }
}

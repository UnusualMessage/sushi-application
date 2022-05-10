using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.OrderCommands;
using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.OrderHandlers
{
    public class CreateOrderHandler : IRequestHandler<CreateOrder, OrderResponse>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IItemRepository _itemRepository;
        private readonly IMapper _mapper;

        public CreateOrderHandler(IOrderRepository orderRepository, IItemRepository itemRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _itemRepository = itemRepository;
            _mapper = mapper;
        }

        public async Task<OrderResponse> Handle(CreateOrder request, CancellationToken cancellationToken)
        {
            Order newOrder = new()
            {
                Status = "Оформлен",
                Created = request.Created,
            };

            return _mapper.Map<OrderResponse>(await _orderRepository.AddAsync(newOrder));
        }
    }
}

﻿using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.OrderCommands;
using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.OrderHandlers
{
    public class UpdateOrderHandler : IRequestHandler<UpdateOrder, OrderResponse>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public UpdateOrderHandler(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
        }

        public async Task<OrderResponse> Handle(UpdateOrder request, CancellationToken cancellationToken)
        {
            return _mapper.Map<OrderResponse>(await _orderRepository.UpdateAsync(_mapper.Map<Order>(request)));
        }
    }
}

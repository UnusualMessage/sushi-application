using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.OrderQueries;
using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.OrderHandlers
{
    public class GetOrdersHandler : IRequestHandler<GetOrders, IEnumerable<OrderResponse>>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public GetOrdersHandler(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<OrderResponse>> Handle(GetOrders request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<OrderResponse>>(await _orderRepository.GetAllAsync());
        }
    }
}

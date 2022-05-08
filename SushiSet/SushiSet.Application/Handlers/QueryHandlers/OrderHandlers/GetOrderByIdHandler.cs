using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.OrderQueries;
using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.OrderHandlers
{
    public class GetOrderByIdHandler : IRequestHandler<GetOrderById, OrderResponse>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public GetOrderByIdHandler(IOrderRepository orderRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mapper = mapper;
        }

        public async Task<OrderResponse> Handle(GetOrderById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<OrderResponse>(await _orderRepository.GetByIdAsync(request.Id));
        }
    }
}

using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CourierQueries;
using SushiSet.Application.Responses.CourierResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CouriersHandlers
{
    public class GetCourierByIdHandler : IRequestHandler<GetCourierById, CourierResponse>
    {
        private readonly ICourierRepository _courierRepository;
        private readonly IMapper _mapper;

        public GetCourierByIdHandler(ICourierRepository courierRepository, IMapper mapper)
        {
            _courierRepository = courierRepository;
            _mapper = mapper;
        }

        public async Task<CourierResponse> Handle(GetCourierById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CourierResponse>(await _courierRepository.GetByIdAsync(request.Id));
        }
    }
}

using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CustomerQueries;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CustomerHandlers
{
    public class GetCustomerByIdHandler : IRequestHandler<GetCustomerById, CustomerResponse>
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;

        public GetCustomerByIdHandler(ICustomerRepository customerRepository, IMapper mapper)
        {
            _customerRepository = customerRepository;
            _mapper = mapper;
        }

        public async Task<CustomerResponse> Handle(GetCustomerById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<CustomerResponse>(await _customerRepository.GetByIdAsync(request.Id));
        }
    }
}

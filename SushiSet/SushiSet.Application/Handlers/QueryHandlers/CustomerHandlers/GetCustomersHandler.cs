using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.CustomerQueries;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CustomerHandlers
{
    public class GetCustomersHandler : IRequestHandler<GetCustomers, IEnumerable<CustomerResponse>>
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;

        public GetCustomersHandler(ICustomerRepository customerRepository, IMapper mapper)
        {
            _customerRepository = customerRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<CustomerResponse>> Handle(GetCustomers request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<CustomerResponse>>(await _customerRepository.GetAllAsync());
        }
    }
}

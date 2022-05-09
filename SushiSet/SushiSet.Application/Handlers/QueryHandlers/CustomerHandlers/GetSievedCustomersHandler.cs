using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.CustomerQueries;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Entities.Users;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.CustomerHandlers
{
    public class GetSievedCustomersHandler : IRequestHandler<GetSievedCustomers, IEnumerable<CustomerResponse>>
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedCustomersHandler(ICustomerRepository customerRepository, ISieveProcessor processor)
        {
            _customerRepository = customerRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<CustomerResponse>> Handle(GetSievedCustomers request, CancellationToken cancellationToken)
        {
            IEnumerable<Customer> result = await _customerRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg => {
                cfg.AddProfile<CustomerProfile>();
            });

            IQueryable<CustomerResponse> response = result.AsQueryable().ProjectTo<CustomerResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

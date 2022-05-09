using MediatR;

using SushiSet.Application.Responses.CustomerResponses;

using System;

namespace SushiSet.Application.Requests.Queries.CustomerQueries
{
    public class GetCustomerById : IRequest<CustomerResponse>
    {
        public Guid Id { get; set; }

        public GetCustomerById(Guid id)
        {
            Id = id;
        }

    }
}

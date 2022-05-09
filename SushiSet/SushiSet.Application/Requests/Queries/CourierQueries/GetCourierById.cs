using MediatR;

using SushiSet.Application.Responses.CourierResponses;

using System;

namespace SushiSet.Application.Requests.Queries.CourierQueries
{
    public class GetCourierById : IRequest<CourierResponse>
    {
        public Guid Id { get; set; }

        public GetCourierById(Guid id)
        {
            Id = id;
        }
    }
}

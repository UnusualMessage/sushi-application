using MediatR;

using SushiSet.Application.Responses.CityResponses;

using System;

namespace SushiSet.Application.Requests.Queries.CityQueries
{
    public class GetCityById : IRequest<CityResponse>
    {
        public Guid Id { get; set; }

        public GetCityById(Guid id)
        {
            Id = id;
        }
    }
}

using MediatR;

using SushiSet.Application.Responses.CityResponses;

using System;

namespace SushiSet.Application.Requests.Commands.CityCommands
{
    public class DeleteCity : IRequest<CityResponse>
    {
        public Guid Id { get; set; }

        public DeleteCity(Guid id)
        {
            Id = id;
        }
    }
}

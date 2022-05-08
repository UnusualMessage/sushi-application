using MediatR;

using SushiSet.Application.Responses.ItemResponses;

using System;

namespace SushiSet.Application.Requests.Commands.ItemCommands
{
    public class DeleteItem : IRequest<ItemResponse>
    {
        public Guid Id { get; set; }

        public DeleteItem(Guid id)
        {
            Id = id;
        }
    }
}

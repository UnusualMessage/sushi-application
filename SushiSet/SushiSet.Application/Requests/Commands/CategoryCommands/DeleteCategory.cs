using MediatR;

using SushiSet.Application.Responses.CategoryResponses;

using System;

namespace SushiSet.Application.Requests.Commands.CategoryCommands
{
    public class DeleteCategory : IRequest<CategoryResponse>
    {
        public Guid Id { get; set; }

        public DeleteCategory(Guid id)
        {
            Id = id;
        }
    }
}

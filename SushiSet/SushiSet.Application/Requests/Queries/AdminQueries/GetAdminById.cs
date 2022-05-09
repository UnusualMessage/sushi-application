using MediatR;

using SushiSet.Application.Responses.AdminResponses;

using System;

namespace SushiSet.Application.Requests.Queries.AdminQueries
{
    public class GetAdminById : IRequest<AdminResponse>
    {
        public Guid Id { get; set; }

        public GetAdminById(Guid id)
        {
            Id = id;
        }
    }
}

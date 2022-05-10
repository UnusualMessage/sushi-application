using MediatR;
using SushiSet.Application.Responses.UserResponses;
using System;

namespace SushiSet.Application.Requests.Queries.UserQueries
{
    public class GetUserById : IRequest<UserResponse>
    {
        public Guid Id { get; set; }

        public GetUserById(Guid id)
        {
            Id = id;
        }
    }
}

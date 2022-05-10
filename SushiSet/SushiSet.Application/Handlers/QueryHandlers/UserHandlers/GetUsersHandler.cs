using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.UserQueries;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.UserHandlers
{
    public class GetUsersHandler : IRequestHandler<GetUsers, IEnumerable<UserResponse>>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public GetUsersHandler(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<UserResponse>> Handle(GetUsers request, CancellationToken cancellationToken)
        {
            return _mapper.Map<IEnumerable<UserResponse>>(await _userRepository.GetAllAsync());
        }
    }
}

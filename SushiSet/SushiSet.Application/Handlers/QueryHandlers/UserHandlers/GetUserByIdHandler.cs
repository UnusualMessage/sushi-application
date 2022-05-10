using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Queries.UserQueries;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.UserHandlers
{
    public class GetUserByIdHandler : IRequestHandler<GetUserById, UserResponse>
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public GetUserByIdHandler(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<UserResponse> Handle(GetUserById request, CancellationToken cancellationToken)
        {
            return _mapper.Map<UserResponse>(await _userRepository.GetByIdAsync(request.Id));
        }
    }
}

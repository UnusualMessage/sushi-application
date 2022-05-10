using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Sieve.Services;

using SushiSet.Application.MappingProfiles;
using SushiSet.Application.Requests.Queries.UserQueries;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.QueryHandlers.UserHandlers
{
    public class GetSievedUsersHandler : IRequestHandler<GetSievedUsers, IEnumerable<UserResponse>>
    {
        private readonly IUserRepository _userRepository;
        private readonly ISieveProcessor _sieveProcessor;

        public GetSievedUsersHandler(IUserRepository userRepository, ISieveProcessor processor)
        {
            _userRepository = userRepository;
            _sieveProcessor = processor;
        }

        public async Task<IEnumerable<UserResponse>> Handle(GetSievedUsers request, CancellationToken cancellationToken)
        {
            IEnumerable<User> result = await _userRepository.GetAllAsync();

            MapperConfiguration configuration = new(cfg =>
            {
                cfg.AddProfile<UserProfile>();
            });

            IQueryable<UserResponse> response = result.AsQueryable().ProjectTo<UserResponse>(configuration);

            return _sieveProcessor.Apply(request.SieveModel, response).AsEnumerable();
        }
    }
}

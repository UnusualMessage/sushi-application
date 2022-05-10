using AutoMapper;

using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, UserResponse>();
            CreateMap<AuthenticateUser, User>();
            CreateMap<RegisterUser, User>();
            CreateMap<User, AuthenticateUserResponse>();
        }
    }
}

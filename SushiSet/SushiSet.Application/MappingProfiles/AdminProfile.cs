using AutoMapper;

using SushiSet.Application.Requests.Commands.AdminCommands;
using SushiSet.Application.Responses.AdminResponses;
using SushiSet.Core.Entities.Users;

namespace SushiSet.Application.MappingProfiles
{
    public class AdminProfile : Profile
    {
        public AdminProfile()
        {
            CreateMap<AuthenticateAdmin, Administrator>();
            CreateMap<RegisterAdmin, Administrator>();
            CreateMap<Administrator, AuthenticateAdminResponse>();
        }
    }
}

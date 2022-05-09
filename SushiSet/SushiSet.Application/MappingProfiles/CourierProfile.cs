using AutoMapper;

using SushiSet.Application.Requests.Commands.CourierCommands;
using SushiSet.Application.Responses.CourierResponses;
using SushiSet.Core.Entities.Users;

namespace SushiSet.Application.MappingProfiles
{
    public class CourierProfile : Profile
    {
        public CourierProfile()
        {
            CreateMap<AuthenticateCourier, Courier>();
            CreateMap<RegisterCourier, Courier>();
            CreateMap<Courier, AuthenticateCourierResponse>();
        }
    }
}

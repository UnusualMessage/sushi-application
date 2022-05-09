using AutoMapper;

using SushiSet.Application.Requests.Commands.CustomerCommands;
using SushiSet.Application.Responses.CustomerResponses;
using SushiSet.Core.Entities.Users;

namespace SushiSet.Application.MappingProfiles
{
    public class CustomerProfile : Profile
    {
        public CustomerProfile()
        {
            CreateMap<Customer, CustomerResponse>();
            CreateMap<AuthenticateCustomer, Customer>();
            CreateMap<RegisterCustomer, Customer>();
            CreateMap<Customer, AuthenticateCustomerResponse>();
        }
    }
}

using AutoMapper;

using SushiSet.Application.Requests.Commands.OrderCommands;
using SushiSet.Application.Responses.OrderResponses;
using SushiSet.Core.Entities;

namespace SushiSet.Application.MappingProfiles
{
    public class OrderProfile : Profile
    {
        public OrderProfile()
        {
            CreateMap<CreateOrder, Order>();
            CreateMap<UpdateOrder, Order>();
            CreateMap<Order, OrderResponse>();
        }
    }
}

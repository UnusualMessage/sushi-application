using AutoMapper;
using MediatR;

using SushiSet.Application.Requests.Commands.ShopCommands;
using SushiSet.Application.Responses.ShopResponses;
using SushiSet.Core.Entities;
using SushiSet.Core.Interfaces.Repositories;

using System.Threading;
using System.Threading.Tasks;

namespace SushiSet.Application.Handlers.CommandHandlers.ShopHandlers
{
    public class UpdateShopHandler : IRequestHandler<UpdateShop, ShopResponse>
    {
        private readonly IShopRepository _shopRepository;
        private readonly IMapper _mapper;

        public UpdateShopHandler(IShopRepository shopRepository, IMapper mapper)
        {
            _shopRepository = shopRepository;
            _mapper = mapper;
        }

        public async Task<ShopResponse> Handle(UpdateShop request, CancellationToken cancellationToken)
        {
            return _mapper.Map<ShopResponse>(await _shopRepository.UpdateAsync(_mapper.Map<Shop>(request)));
        }
    }
}

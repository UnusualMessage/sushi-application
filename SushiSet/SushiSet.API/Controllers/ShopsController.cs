using MediatR;
using Sieve.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using SushiSet.Application.Requests.Queries.ShopQueries;
using SushiSet.Application.Requests.Commands.ShopCommands;

using System;
using System.Threading.Tasks;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShopsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public ShopsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetShops()));
        }

        [AllowAnonymous]
        [Route("sieved")]
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] SieveModel sieveModel)
        {
            return Ok(await _mediator.Send(new GetSievedShops(sieveModel)));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetShopById(id)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateShop request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteShop(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateShop request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}

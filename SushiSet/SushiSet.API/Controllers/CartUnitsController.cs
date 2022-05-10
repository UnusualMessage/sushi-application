using MediatR;
using Sieve.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using SushiSet.Application.Requests.Commands.CartUnitCommands;
using SushiSet.Application.Requests.Queries.CartUnitQueries;

using System;
using System.Threading.Tasks;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartUnitsController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CartUnitsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [Route("sieved")]
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] SieveModel sieveModel)
        {
            return Ok(await _mediator.Send(new GetSievedCartUnits(sieveModel)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateCartUnit request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteCartUnit(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateCartUnit request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}

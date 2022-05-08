using Sieve.Models;
using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Threading.Tasks;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrdersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(null));
        }

        [AllowAnonymous]
        [Route("Sieved")]
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] SieveModel model)
        {
            return Ok(await _mediator.Send(model));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(id));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            return Ok(await _mediator.Send(id));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] string request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}

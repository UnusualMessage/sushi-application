using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Threading.Tasks;

using SushiSet.Application.Requests.Queries.OrderQueries;
using SushiSet.Application.Requests.Commands.OrderCommands;

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
            return Ok(await _mediator.Send(new GetOrders()));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetOrderById(id)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateOrder request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteOrder(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateOrder request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}

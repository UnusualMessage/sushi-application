using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

using System;
using System.Threading.Tasks;

using SushiSet.Application.Requests.Queries.ItemQueries;
using SushiSet.Application.Requests.Commands.ItemCommands;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IWebHostEnvironment _webHostEnvironment;

        public ItemsController(IMediator mediator, IWebHostEnvironment webHostEnvironment)
        {
            _mediator = mediator;
            _webHostEnvironment = webHostEnvironment;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetItems()));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetItemById(id)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromForm] CreateItem request)
        {
            request.Destination = _webHostEnvironment.WebRootPath;

            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteItem(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromForm] UpdateItem request)
        {
            request.Destination = _webHostEnvironment.WebRootPath;

            return Ok(await _mediator.Send(request));
        }
    }
}

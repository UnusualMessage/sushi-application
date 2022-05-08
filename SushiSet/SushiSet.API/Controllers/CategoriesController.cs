using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using System;
using System.Threading.Tasks;

using SushiSet.Application.Requests.Queries.CategoryQueries;
using SushiSet.Application.Requests.Commands.CategoryCommands;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CategoriesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetCategories()));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetCategoryById(id)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateCategory request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteCategory(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateCategory request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}

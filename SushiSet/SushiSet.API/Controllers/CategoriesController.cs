using MediatR;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Hosting;

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
        private readonly IWebHostEnvironment _webHostEnvironment;

        public CategoriesController(IMediator mediator, IWebHostEnvironment webHostEnvironment)
        {
            _mediator = mediator;
            _webHostEnvironment = webHostEnvironment;
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
        public async Task<IActionResult> Post([FromForm] CreateCategory request)
        {
            request.Destination = _webHostEnvironment.WebRootPath;

            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteCategory(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromForm] UpdateCategory request)
        {
            request.Destination = _webHostEnvironment.WebRootPath;

            return Ok(await _mediator.Send(request));
        }
    }
}

using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sieve.Models;

using SushiSet.Application.Requests.Commands.CityCommands;
using SushiSet.Application.Requests.Queries.CityQueries;

using System;
using System.Threading.Tasks;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CitiesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetCities()));
        }

        [AllowAnonymous]
        [Route("sieved")]
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] SieveModel sieveModel)
        {
            return Ok(await _mediator.Send(new GetSievedCities(sieveModel)));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetCityById(id)));
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] CreateCity request)
        {
            return Ok(await _mediator.Send(request));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new DeleteCity(id)));
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] UpdateCity request)
        {
            return Ok(await _mediator.Send(request));
        }
    }
}

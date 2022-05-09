﻿using MediatR;
using Sieve.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

using SushiSet.Application.Requests.Commands.CourierCommands;
using SushiSet.Application.Requests.Queries.CourierQueries;

using System;
using System.Threading.Tasks;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CouriersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public CouriersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetCouriers()));
        }

        [AllowAnonymous]
        [Route("sieved")]
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] SieveModel sieveModel)
        {
            return Ok(await _mediator.Send(new GetSievedCouriers(sieveModel)));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetCourierById(id)));
        }

        [AllowAnonymous]
        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterCourier request)
        {
            request.IpAddress = GetIpAddress();

            return Ok(await _mediator.Send(request));
        }

        [AllowAnonymous]
        [Route("authenticate")]
        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateCourier request)
        {
            request.IpAddress = GetIpAddress();

            return Ok(await _mediator.Send(request));
        }

        [AllowAnonymous]
        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] RefreshCourier request)
        {
            request.IpAddress = GetIpAddress();

            return Ok(await _mediator.Send(request));
        }

        [Authorize]
        [HttpPost("revoke")]
        public async Task<IActionResult> Revoke([FromBody] RevokeCourier request)
        {
            request.IpAddress = GetIpAddress();

            return Ok(await _mediator.Send(request));
        }

        private string GetIpAddress()
        {
            if (Request.Headers.ContainsKey("X-Forwarded-For"))
            {
                return Request.Headers["X-Forwarded-For"];
            }
            else
            {
                return HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
            }
        }
    }
}

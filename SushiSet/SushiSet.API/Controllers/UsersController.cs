using MediatR;
using Sieve.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

using System;
using System.Threading.Tasks;

using SushiSet.Application.Requests.Commands.UserCommands;
using SushiSet.Application.Responses.UserResponses;
using SushiSet.Application.Requests.Queries.UserQueries;

namespace SushiSet.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IMediator _mediator;

        public UsersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await _mediator.Send(new GetUsers()));
        }

        [AllowAnonymous]
        [Route("sieved")]
        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] SieveModel sieveModel)
        {
            return Ok(await _mediator.Send(new GetSievedUsers(sieveModel)));
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get([FromRoute] Guid id)
        {
            return Ok(await _mediator.Send(new GetUserById(id)));
        }

        [AllowAnonymous]
        [Route("register")]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] RegisterUser request)
        {
            request.IpAddress = GetIpAddress();

            AuthenticateUserResponse response = await _mediator.Send(request);

            if (response.Successful)
            {
                SetTokenCookie(response.RefreshToken);

                return Ok(response);
            }

            return BadRequest();
        }

        [AllowAnonymous]
        [Route("authenticate")]
        [HttpPost]
        public async Task<IActionResult> Authenticate([FromBody] AuthenticateUser request)
        {
            request.IpAddress = GetIpAddress();

            AuthenticateUserResponse response = await _mediator.Send(request);

            if (response.Successful)
            {
                SetTokenCookie(response.RefreshToken);

                return Ok(response);
            }

            return BadRequest();
        }

        [AllowAnonymous]
        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] RefreshUser request)
        {
            string refreshToken = Request.Cookies["refreshToken"];
            request.IpAddress = GetIpAddress();

            request.RefreshToken = refreshToken;

            AuthenticateUserResponse response = await _mediator.Send(request);

            if (response == null)
            {
                return Ok(response);
            }

            SetTokenCookie(response.RefreshToken);
            return Ok(response);
        }

        [Authorize]
        [HttpPost("revoke")]
        public async Task<IActionResult> Revoke([FromBody] RevokeUser request)
        {
            string refreshToken = Request.Cookies["refreshToken"];
            request.IpAddress = GetIpAddress();

            request.RefreshToken = refreshToken;

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

        private void SetTokenCookie(string token)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.UtcNow.AddDays(7)
            };

            Response.Cookies.Append("refreshToken", token, cookieOptions);
        }
    }
}

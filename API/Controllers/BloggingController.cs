using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DAL;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BloggingController : ControllerBase
    {
        private readonly IMediator _bus;
        private readonly ILogger<BloggingController> _logger;
        

        public BloggingController(ILogger<BloggingController> logger, IMediator bus )
        {
            _logger = logger;
            _bus = bus;
        }




        [HttpGet("items")]
        public async Task<IActionResult> Get()
        {
            FetchItemQuery query = new FetchItemQuery();
            var result = await _bus.Send(query);
            return Ok(result);
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Query;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DAL;
using API.Services;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BloggingController : ControllerBase
    {
        private readonly IMediator _bus;
        private readonly ILogger<BloggingController> _logger;
        private readonly AboutUsService _aboutus;


        public BloggingController(ILogger<BloggingController> logger, IMediator bus, AboutUsService ser)
        {
            _logger = logger;
            _bus = bus;
            _aboutus = ser;
        }




        [HttpGet("items")]
        public async Task<IActionResult> Get()
        {
            //FetchItemQuery query = new FetchItemQuery();
            //var result = await _bus.Send(query);

            var result = _aboutus.Get();
            return Ok(result);
        }
    }
}

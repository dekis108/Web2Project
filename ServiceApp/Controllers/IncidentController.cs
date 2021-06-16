using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using DatabaseManager;
using DatabaseManager.Model;
using Microsoft.EntityFrameworkCore;

namespace ServiceApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IncidentController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public IncidentController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getIncidentBasicInfo")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> Get()
        {
            Console.WriteLine("Pozvano");
            return Ok(_context.IncidentBasicInfoes);
        }

    }
}
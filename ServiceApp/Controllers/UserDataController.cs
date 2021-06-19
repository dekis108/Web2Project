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
    public class UserDataController : ControllerBase
    {

        private readonly DatabaseContext _context;

        public UserDataController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getCustomers")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getCustomers()
        {
            return Ok(_context.UserDatas);
        }


    }
}

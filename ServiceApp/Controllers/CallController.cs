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
    public class CallController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public CallController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getCalls")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getCalls()
        {
            return Ok(_context.Calls);
        }

        [HttpPost]
        [Route("AddCall/{comment}/{customerId}/{malfunctionName}/{priority}/{reason}")]
        public async Task<IActionResult> AddDevice(int countI, string comment, string customerId, string malfunctionName, int priority, string reason)
        {
            int count = _context.Calls.Count() + 1 + countI;

            Call c = new Call()
            {
                Id = "C_" + count,
                Comment = comment,
                CustomerId = customerId,
                MalfunctionName = malfunctionName,
                Priority = priority,
                Reason = (CallReason)Enum.Parse(typeof(CallReason), reason),
            };

            _context.Calls.Add(c);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet]
        [Route("GetCallsFromDevice/{ids}")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getCallsFromDevice(string ids)
        {
            var deviceId = ids.Split(';');
            deviceId[deviceId.Length - 1] = "-1";

            
            var calls = _context.Calls.Where(x => deviceId.Contains(x.DeviceId));
            
            return Ok(calls);
        }
    }
}

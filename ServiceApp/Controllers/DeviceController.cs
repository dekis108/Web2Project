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
    public class DeviceController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public DeviceController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getDevices")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getDevices()
        {
            return Ok(_context.Devices);
        }

        [HttpPut]
        [Route("AddDevice/{name}/{address}/{coordinates}/{type}/{priority}")]
        public async Task<IActionResult> AddDevice(string name, string address, string coordinates, string type, int priority)
        {
            int count = _context.Devices.Count() + 1;
            Device device = new Device()
            {
                Id = "Dev_" + count,
                Address = address,
                Coords = coordinates,
                Name = name,
                Priority = priority,
                Type = (DeviceType)Enum.Parse(typeof(DeviceType), type),
            };

            _context.Devices.Add(device);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}

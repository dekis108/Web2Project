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
            return Ok(_context.IncidentBasicInfoes);
        }

        [HttpGet]
        [Route("seed")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> seed()
        {
            _context.ApplySeed();
            return Ok();
        }

        [HttpGet]
        [Route("getIncidentWidgetInfo")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getIncidentWidgetInfo()
        {
            var incidents = _context.IncidentBasicInfoes;

            int drafts = incidents.Where(x => x.Status == IncidentStatus.Draft).Count();
            int cancelled = incidents.Where(x => x.Status == IncidentStatus.Cancelled).Count();
            int executing = incidents.Where(x => x.Status == IncidentStatus.Executing).Count();
            int completed = incidents.Where(x => x.Status == IncidentStatus.Completed).Count();

            IncidentWidgetInfo incidentWidgetInfo = new IncidentWidgetInfo(drafts, cancelled, executing, completed);
            return Ok(incidentWidgetInfo);
        }

    }
}
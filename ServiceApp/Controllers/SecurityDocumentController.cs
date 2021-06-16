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
    public class SecurityDocumentController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public SecurityDocumentController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("getSecurityDocuments")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getSecurityDocuments()
        {
            return Ok(_context.DocumentInfoes);
        }


        [HttpGet]
        [Route("getDocumentWidgetInfo")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getDocumentWidgetInfo()
        {
            var incidents = _context.DocumentInfoes;

            int drafts = incidents.Where(x => x.Status == DocumentStatus.Draft).Count();
            int cancelled = incidents.Where(x => x.Status == DocumentStatus.Cancelled).Count();
            int executing = incidents.Where(x => x.Status == DocumentStatus.Executing).Count();
            int issued = incidents.Where(x => x.Status == DocumentStatus.Issued).Count();

            DocumentWidgetInfo incidentWidgetInfo = new DocumentWidgetInfo(drafts, cancelled, executing, issued);
            return Ok(incidentWidgetInfo);
        }
    }
}

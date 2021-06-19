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
using System.Drawing;
using System.Drawing.Imaging;

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

        [HttpPost]
        [Route("AddDeviceToIncident/{incidentId}/{deviceIds}")]
        public async Task<IActionResult> AddDeviceToIncident(string incidentId, string deviceIds)
        {
            var devIds = deviceIds.Split(';');
            devIds[devIds.Length - 1] = "-1";

            var devices = _context.Devices.Where(x => devIds.Contains(x.Id));

            foreach(Device device in devices)
            {
                device.IncidentId = incidentId;
            }


            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        [Route("AddIncident/{id}/{voltage}/{scheduledTime}/{affectedCustomers}/{ata}/{eta}/{etr}/{confirmed}/{selfAssigned}/{incidentStatus}/{outageTime}/{priority}/{incidentType}/{cause}/{subcause}/{material}/{constructionType}")]
        public async Task<IActionResult> AddIncident(string id, double voltage, string scheduledTime, int affectedCustomers, string ata,
                                                     string eta, string etr, bool confirmed, bool selfAssigned, string incidentStatus, string outageTime,
                                                     int priority, string incidentType, string cause, string subcause, string material, string constructionType)
        {
            IncidentBasicInfo basicInfo = new IncidentBasicInfo()
            {
                Id = "Binfo_" + id,
                Voltage = voltage,
                ScheduledTime = DateTime.Parse(scheduledTime),
                AffectedCustomers = affectedCustomers,
                ATA = DateTime.Parse(ata),
                ETA = DateTime.Parse(eta),
                ETR = DateTime.Parse(etr),
                Confirmed = confirmed,
                SelfAssigned = selfAssigned,
                Status = (IncidentStatus)Enum.Parse(typeof(IncidentStatus), incidentStatus),
                OutageTime = DateTime.Parse(outageTime),
                Priority = priority,
                Type = (IncidentType)Enum.Parse(typeof(IncidentType), incidentType),
            };


            Incident incident = new Incident()
            {
                BasicInfoId = "Binfo_" + id,
                Id = id,
                Cause = cause,
                Subcause = subcause,
                Material = material,
                ConstructionType = constructionType,
            };


            _context.IncidentBasicInfoes.Add(basicInfo);
            _context.Incidents.Add(incident);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        [Route("AddCallsToIncident/{incidentId}/{callId}")]
        public async Task<IActionResult> AddCallsToIncident(string incidentId, string callId)
        {
            var callIds = callId.Split(';');
            callIds[callIds.Length - 1] = "-1";

            var calls = _context.Calls.Where(x => callIds.Contains(x.Id));

            foreach (Call call in calls)
            {
                call.IncidentId = incidentId;
            }


            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpPost]
        [Route("getNumCalls/{incidentId}")]
        public async Task<ActionResult<IEnumerable<IncidentBasicInfo>>> getNumCalls(string incidentId)
        {
            var incident = _context.Incidents.Where(x => x.BasicInfoId == incidentId).First();

            int n = _context.Calls.Where(x => incident.Id == x.IncidentId).Count();

            return Ok(n);
        }


        [HttpPost]
        [Route("AddImage/{incidentId}/{image}/{countI}")]
        public async Task<IActionResult> AddImage(string incidentId, string image, int countI)
        {
            int count = _context.Multimedia.Count() + 1 + countI;
            Multimedia multi = new Multimedia()
            {
                Id = "Mult_" + incidentId + count,
                ImageUrl = image,
                IncidentId = incidentId,
            };

            var file = Request.Form.Files[0];
            MemoryStream ms = new MemoryStream();
            file.CopyTo(ms);
            multi.Image = ms.ToArray();


            Bitmap bmp = new Bitmap(ms);
            bmp.Save(image + "_" + count + ".jpeg", ImageFormat.Jpeg);

            ms.Close();
            _context.Multimedia.Add(multi);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
﻿using Microsoft.AspNetCore.Cors;
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

        [HttpPut]
        [Route("AddDocument/{planned}/{datetime}/{details}/{notes}/{phoneNumber}/{createdBy}/{workOperationsCompleted}/{tagsRemoved}/{groundingRemoved}/{ready}")]
        public async Task<IActionResult> AddDocument(bool planned, string datetime, string details, string notes,
            string phoneNumber, string createdBy, bool workOperationsCompleted, bool tagsRemoved, bool groundingRemoved, bool ready)
        {
            /*
            int count = _context.PlanoviRadaTB.Count() + 1;
            string plID = count.ToString();
            PlanRada pl = new PlanRada(plID, userid, createdby, DateTime.Parse(datecreated), company, tipnacemu, DateTime.Parse(startdate), DateTime.Parse(enddate), tiprada, phoneno, "", "", "", adresa, svrha, detalji, beleske);
            pl.Status = status;
            pl.UserID = userid;
            _context.Add(pl);
            await _context.SaveChangesAsync();
            */

            DocumentInfo info = new DocumentInfo();
            SecurityDocument newDoc = new SecurityDocument();
            try
            {
                string DId = "SD_" + datetime;


                info.Id = "Info_" + DId;
                info.Creator = _context.UserDatas.Find(createdBy);
                info.Date = DateTime.Parse(datetime);
                info.Status = DocumentStatus.Draft;
                info.Details = details;
                info.Notes = notes;
                info.PhoneNumber = phoneNumber;
                info.Planned = planned;

                newDoc.Id = DId;
                newDoc.DocumentInfo = info;
            }
            catch{

            }


            return Ok();
        }
    }
}

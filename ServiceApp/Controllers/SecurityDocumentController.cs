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

                _context.DocumentInfoes.Add(info);
                _context.SecurityDocuments.Add(newDoc);
                await _context.SaveChangesAsync();
            }
            catch{

            }


            return Ok();
        }


        [HttpPost]
        [Route("AddImage/{docId}/{image}/{countI}")]
        public async Task<IActionResult> AddImage(string docId, string image, int countI)
        {
            int count = _context.Multimedia.Count() + 1 + countI;
            Multimedia multi = new Multimedia()
            {
                Id = "Mult_" + docId + count,
                ImageUrl = image,
                SecurityDocumentId = docId,
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

        [HttpPost]
        [Route("AddHistory/{countI}/{userId}/{documentId}/{datetime}/{documentStatus}")]
        public async Task<IActionResult> AddHistory(int countI, string userId, string documentId, string datetime, string documentStatus)
        {
            int count = _context.HistoryChanges.Count() + 1 + countI;

            HistoryChange hs = new HistoryChange()
            {
                Id = "HS_" + count,
                UserId = userId,
                SecurityDocumentId = documentId,
                Date = DateTime.Parse(datetime),
                DocumentStatus = (DocumentStatus)Enum.Parse(typeof(DocumentStatus), documentStatus)
            };

            _context.HistoryChanges.Add(hs);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}

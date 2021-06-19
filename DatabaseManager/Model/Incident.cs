using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    /*
    export interface Incident {
        basicInformation: BasicInformation;
        devices: Device;
        resolution: Resolution;
        calls: Call;
        crew: Crew;
        multimedia: Multimedia;
     }

     */

    public class Incident
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }  

        public string BasicInfoId { get; set; }

        [ForeignKey("BasicInfoId")]
        public virtual IncidentBasicInfo BasicInfo { get; set; }

        public string Cause { get; set; }

        public string Subcause { get; set; }

        public string Material { get; set; }

        public string ConstructionType { get; set; }
    }
}

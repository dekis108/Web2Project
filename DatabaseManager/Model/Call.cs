using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DatabaseManager.Model
{
    /*
    reason : Reason;
    comment: string;
    malfunction: Malfunction;
    customerId : string;

    
export enum Reason {
    NoPower = "No Power",
    Malfunction = "Malfunction",
    LightFlickering = "Light flickering",
    YesPower = "Power online",
    PartialCurrent = "Partial current",
    LowVotage = "Low voltage",
}
*/

    public enum CallReason {
        NoPower = 0,
        Malfunction, 
        LightFlickering,
        YesPower,
        PartialCurrent, 
        LowVoltage,
    };

    public class Call
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }

        public string Comment { get; set; }

        public string CustomerId { get; set; }

        [ForeignKey("CustomerId")]
        public virtual UserData Customer { get; set; }

        public CallReason Reason { get; set; }

        public string MalfunctionName { get; set; }

        public int Priority { get; set; }

        public string DeviceId { get; set; }

        [ForeignKey("DeviceId")]
        public virtual Device Device { get; set; }

        public string IncidentId { get; set; }

        [ForeignKey("IncidentId")]
        public virtual Incident Incident { get; set; }

    }
}

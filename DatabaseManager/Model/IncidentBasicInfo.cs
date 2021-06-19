using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DatabaseManager.Model
{
    /*
    export interface BasicInformation  {
    id: string;
    type: IncidentType;
    priority: number;
    confirmed: boolean;
    status: IncidentStatus;
    ETA: Date;    
    ATA : Date; //actual time of arrival
    outageTime: Date;
    ETR : Date; //estimated time to restore
    affectedCustomers: number;
    calls: number;
    voltage: number; //kV
    scheduledTime: Date;
    selfAssign: SelfAssign; 
}

export enum SelfAssign {
    Yes = "Yes",
    No = "No",
}

export enum IncidentType {
    Unplanned = "Unplanned", 
    Planned  = "Planned"
}

export enum IncidentStatus {
    Dispatched = "Dispatched",
    Draft = "Draft",
    Executing = "Executing",
    Cancelled = "Cancelled",
    Completed = "Completed"
    //todo ???
}
     */
    public enum IncidentType { Unplanned = 0, Planned}



    public enum IncidentStatus { Draft = 0, Dispatched, Executing, Completed, Cancelled}

    public class IncidentBasicInfo
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }

        public IncidentType Type { get; set; }

        public int Priority { get; set; }

        public bool Confirmed { get; set; }

        public IncidentStatus Status { get; set; }

        public DateTime ETA { get; set; }

        public DateTime ATA { get; set; }

        public DateTime OutageTime { get; set; }

        public DateTime ETR { get; set; }

        public int AffectedCustomers { get; set; }

        public double Voltage { get; set; }

        public DateTime ScheduledTime { get; set; }

        public bool SelfAssigned { get; set; }
    }
}

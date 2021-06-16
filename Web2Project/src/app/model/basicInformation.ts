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

export interface BasicInformation  {
    id: string;
    type: IncidentType;
    priority: number;
    confirmed: boolean;
    status: IncidentStatus;
    ETA: string;    
    ATA : string; //actual time of arrival
    outageTime: string;
    ETR : string; //estimated time to restore
    affectedCustomers: number;
    voltage: number; //kV
    scheduledTime: string;
    selfAssign: boolean; 
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

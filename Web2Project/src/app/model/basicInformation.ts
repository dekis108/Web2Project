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
    selfAssign: boolean; 
}

export enum IncidentType {
    Unplanned = 0,
    Planned = 1
}

export enum IncidentStatus {
    Dispatched = 0,
    //todo ???
}
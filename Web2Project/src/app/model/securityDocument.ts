import { Crew } from "./crew"
import { Customer } from "./cusomter"

export interface SecurityDocument  {
    documentInfo: DocumentInfo;
}

export interface DocumentInfo {
    planned: Planned;
    //workplan
    status: DocumentStatus;
    creator: Customer;
    crew: Crew;
    details: string;
    notes: string;
    phoneNumber: string;
    datetime: Date;
}


export enum DocumentStatus {
    Draft = "Draft",
    Confirmed = "Confirmed",
}

export enum Planned {
    Yes = "Yes",
    No = "No",
}

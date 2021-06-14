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

export interface Checklist {
   workOperationsCompleted : boolean;
   tagsRemoved : boolean; 
   groundingRemoved : boolean;
   ready : boolean;
}

export interface HistoryChange {
    name: string;
    lastName: string;
    status: DocumentStatus;
    datetime: Date;
}

export enum DocumentStatus {
    Draft = "Draft",
    Issued = "Issued",
    Canceled = "Canceled",
}

export enum Planned {
    Yes = "Yes",
    No = "No",
}



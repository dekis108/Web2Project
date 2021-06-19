import { Crew } from "./crew"
import { Customer } from "./cusomter"

export interface DocumentPost {
    planned: boolean,
    datetime: string,
    details: string,
    notes: string,
    phoneNumber: string,
    createdBy: string,

    workOperationsCompleted: boolean,
    tagsRemoved: boolean,
    groundingRemoved: boolean,
    ready: boolean
}

export interface SecurityDocument  {
    documentInfo: DocumentInfo;
}

export interface DocumentInfo {
    planned: Planned;
    //workplan
    status: DocumentStatus;
    details: string;
    notes: string;
    phoneNumber: string;
    datetime: string;
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

export interface HistoryPost {
    userId: string;
    documentId: string;
    documentStatus: DocumentStatus;
    datetime: string;
}

export enum DocumentStatus {
    Draft = "Draft",
    Issued = "Issued",
    Cancelled = "Cancelled",
    Executing = "Executing"
}

export enum Planned {
    Yes = "Yes",
    No = "No",
}



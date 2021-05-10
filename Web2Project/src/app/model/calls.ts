export interface Calls {
    reason : Reason;
    comment: string;
    malfunction: Malfunction;
    userData : UserData;
}

export enum Reason {
    NoPower = "No Power",
    Malfunction = "Malfunction",
    LightFlickering = "Light flickering",
    YesPower = "Power online",
    PartialCurrent = "Partial current",
    LowVotage = "Low voltage",
}

export interface Malfunction {
    name : string;
    priority: number;
}

export interface UserData {
    name: string;
    lastName: string;
    address: string;
    account: number;
    priority: string;
}

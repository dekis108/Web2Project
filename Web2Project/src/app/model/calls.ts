export interface Call {
    reason : string;
    comment: string;
    malfunction: Malfunction;
    customerId : string;
    created: boolean;
}

export enum Reason {
    NoPower = "NoPower",
    Malfunction = "Malfunction",
    LightFlickering = "LightFlickering",
    YesPower = "YesPower",
    PartialCurrent = "PartialCurrent",
    LowVoltage = "LowVoltage",
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

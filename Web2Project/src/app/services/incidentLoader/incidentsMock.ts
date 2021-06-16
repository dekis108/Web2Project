import { Incident} from "src/app/model/incident";
import {BasicInformation, IncidentType, IncidentStatus, SelfAssign} from "src/app/model/basicInformation";
import {Device} from "src/app/model/devices";
import {Resolution} from "src/app/model/resolution";
import { Call, Malfunction, Reason, UserData } from "src/app/model/calls";
import { Crew } from "src/app/model/crew";
import { Multimedia } from "src/app/model/mutlimedia";
import { Customer } from "src/app/model/cusomter";
import { DocumentInfo, DocumentStatus, Planned, SecurityDocument } from "src/app/model/securityDocument";


export const _multimedia: Multimedia[] = [
    {}
];

export const _Crew: Crew[] = [
    {}
];

export const _Malfunctions: Malfunction[] = [
    {name: "Death", priority: 9999},
]

export const _UserData: UserData[] = [
    {name:"John", lastName:"Doe", address:"Novi Sad 123123", account:123, priority:"Doe"},
]

export const _Calls: Call[] = [
    {reason: Reason.LightFlickering, comment : "No comment", malfunction: _Malfunctions[0] ,  userData: _UserData[0]},
]

export const Devices: Device[] = [
    {priority: 4, randomAttribute1: 1, randomAttribute2: 3,     calls: [_Calls[0]]},
    {priority: 1, randomAttribute1: 2, randomAttribute2: 3,     calls: []},
    {priority: 3, randomAttribute1: 3, randomAttribute2: 34,    calls: []},
    {priority: 5, randomAttribute1: 4, randomAttribute2: 34,    calls: []},
    {priority: 6, randomAttribute1: 5, randomAttribute2: 344,   calls: []},
];

export const Customers: Customer[] = [
    {name: "John", lastName: "Doe", street: "Street1", city: "City1", postcard:"11345", priority:1, phoneNumber:"006221214", id: "C1", residental: true},
    {name: "Yohan", lastName: "Doic", street: "Street2", city: "City2", postcard:"00916", priority:2, phoneNumber:"006333333", id: "C2", residental: false},
]

export const Resolutions: Resolution[] = [
    {}
];

export const BInfo : BasicInformation[] = [
    {
        id: "id1",
        type: IncidentType.Planned,
        priority: 13,
        confirmed: true,
        status: IncidentStatus.Dispatched,
        ETA: new Date("2019-01-16"),
        ATA: new Date("2019-01-16"),
        outageTime: new Date("2019-01-16"),
        ETR: new Date("2019-01-16"),
        affectedCustomers: 350,
        calls: 7,
        voltage: 5,
        scheduledTime: new Date("2019-01-16"),
        selfAssign: SelfAssign.No
    },
    {
        id: "id2",
        type: IncidentType.Unplanned,
        priority: 31,
        confirmed: false,
        status: IncidentStatus.Draft,
        ETA: new Date("2019-01-16"),
        ATA: new Date("2019-01-16"),
        outageTime: new Date("2019-01-16"),
        ETR: new Date("2019-01-16"),
        affectedCustomers: 120,
        calls: 7,
        voltage: 5,
        scheduledTime: new Date("2019-01-16"),
        selfAssign:  SelfAssign.No
    },
    {
        id: "id3",
        type: IncidentType.Planned,
        priority: 13,
        confirmed: true,
        status: IncidentStatus.Draft,
        ETA: new Date("2019-01-16"),
        ATA: new Date("2019-01-16"),
        outageTime: new Date("2019-01-16"),
        ETR: new Date("2019-01-16"),
        affectedCustomers: 350,
        calls: 7,
        voltage: 5,
        scheduledTime: new Date("2019-01-16"),
        selfAssign:  SelfAssign.Yes
    },
    {
        id: "id4",
        type: IncidentType.Planned,
        priority: 13,
        confirmed: true,
        status: IncidentStatus.Draft,
        ETA: new Date("2019-01-16"),
        ATA: new Date("2019-01-16"),
        outageTime: new Date("2019-01-16"),
        ETR: new Date("2019-01-16"),
        affectedCustomers: 350,
        calls: 7,
        voltage: 5,
        scheduledTime: new Date("2019-01-16"),
        selfAssign: SelfAssign.Yes
    },
    {
        id: "id5",
        type: IncidentType.Planned,
        priority: 13,
        confirmed: true,
        status: IncidentStatus.Executing,
        ETA: new Date("2019-01-16"),
        ATA: new Date("2019-01-16"),
        outageTime: new Date("2019-01-16"),
        ETR: new Date("2019-01-16"),
        affectedCustomers: 350,
        calls: 7,
        voltage: 5,
        scheduledTime: new Date("2019-01-16"),
        selfAssign: SelfAssign.Yes
    },
    {
        id: "id6",
        type: IncidentType.Planned,
        priority: 13,
        confirmed: true,
        status: IncidentStatus.Completed,
        ETA: new Date("2019-01-16"),
        ATA: new Date("2019-01-16"),
        outageTime: new Date("2019-01-16"),
        ETR: new Date("2019-01-16"),
        affectedCustomers: 350,
        calls: 7,
        voltage: 5,
        scheduledTime: new Date("2019-01-16"),
        selfAssign: SelfAssign.Yes
    },
];


export const Incidents: Incident[] = [
    {basicInformation: BInfo[0], devices: Devices[0], resolution: Resolutions[0], calls: _Calls[0], crew: _Crew[0], multimedia: _multimedia[0]}
];


export const DocumentsInfo: DocumentInfo[] = [
    {planned : Planned.Yes, status : DocumentStatus.Draft, details : "Details...", notes : "Notes...", phoneNumber: "0005141", 
        datetime : new Date("2019-01-16")}
];

export const Documents: SecurityDocument[] = [
    {documentInfo: DocumentsInfo[0]}
];






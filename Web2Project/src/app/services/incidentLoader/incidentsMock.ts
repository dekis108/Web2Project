import { Incident} from "src/app/model/incident";
import {BasicInformation, IncidentType, IncidentStatus, SelfAssign} from "src/app/model/basicInformation";
import {Device} from "src/app/model/devices";
import {Resolution} from "src/app/model/resolution";
import { Calls } from "src/app/model/calls";
import { Crew } from "src/app/model/crew";
import { Multimedia } from "src/app/model/mutlimedia";

export const _multimedia: Multimedia[] = [
    {}
];

export const _Crew: Crew[] = [
    {}
];

export const _Calls: Calls[] = [
    {}
]

export const Devices: Device[] = [
    {}
];

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





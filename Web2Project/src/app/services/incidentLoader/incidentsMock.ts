import { Incident} from "src/app/model/incident";
import {BasicInformation, IncidentType, IncidentStatus} from "src/app/model/basicInformation";
import {Device} from "src/app/model/devices";

//let deja: new Incident();

export const Incidents: Incident[] = [
    //new Incident(),

];

export const Devices: Device[] = [

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
        selfAssign: false
    },
];
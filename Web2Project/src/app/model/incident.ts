import { BasicInformation } from "./basicInformation";
import { Calls } from "./calls";
import { Crew } from "./crew";
import { Devices } from "./devices";
import { MultiMediaAttachment } from "./mutlimedia";
import { Resolution } from "./resolution";

export interface Incident {
    basicInformation: BasicInformation;
    devices: Devices;
    resolution: Resolution;
    calls: Calls;
    crew: Crew;
    multimedia: MultiMediaAttachment;
}


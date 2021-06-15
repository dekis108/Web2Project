import { BasicInformation } from "./basicInformation";
import { Call } from "./calls";
import { Crew } from "./crew";
import { Device } from "./devices";
import { Multimedia } from "./mutlimedia";
import { Resolution } from "./resolution";

export interface Incident {
    basicInformation: BasicInformation;
    devices: Device;
    resolution: Resolution;
    calls: Call;
    crew: Crew;
    multimedia: Multimedia;
}


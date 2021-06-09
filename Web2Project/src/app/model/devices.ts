import { Call } from "./calls";

export interface Device {
    priority: number;
    randomAttribute1: number;
    randomAttribute2: number;
    calls: Call[];
}
import { Call } from "./calls";

/*
●	Tip – i može biti: prekidač, osigurač, transformator, diskonektor.
●	Id – predstavlja jedinstveni identifikator
●	Naziv – naziv, koji treba da ima notaciju prva tri slova tipa + id koji se svaki put inkrementira (npr. Ukoliko dodajemo novi prekidač biće: PRE1)
●	Adresa – adresa na kojoj se nalazi elemenat; Napomena: Maksimalan broj elemenata u ulici je 100.
●	Koordinate – tačne koordinate elementa

*/

export interface Device {
    id: string;
    type: DeviceType;
    name: string;
    address: string;
    coords: string;
    priority: number;
    callIds: number[];
}

export enum DeviceType {
    Switch = "Switch",
    Breaker = "Breaker",
    Transformator = "Transformator",
    Disconnector = "Disconnector"
}
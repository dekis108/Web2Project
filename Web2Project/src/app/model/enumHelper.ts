import { IncidentStatus, IncidentType, SelfAssign } from "./basicInformation";
import { DeviceType } from "./devices";
import { DocumentStatus, Planned } from "./securityDocument";

export class EnumHelper {
    static getIncidentType(n : number) {
        console.log("pokrenuo sam se sa brojem: "  +n);
        if (n == 0) {
            return IncidentType.Unplanned;
        }
        else return IncidentType.Planned;
    }

    static getSelfAssign(n : number) {
        if ( n== 0) {
            return SelfAssign.No;
        }
        else {
            return SelfAssign.Yes;
        }
    } 

    
    static getIncidentStatus(n : number) {
        if ( n== 0) {
            return IncidentStatus.Draft;
        }
        else if (n == 1) {
            return IncidentStatus.Dispatched;
        }
        else if (n == 2) {
            return IncidentStatus.Executing;
        }
        else if (n == 3) {
            return IncidentStatus.Completed;
        }
        else  {
            return IncidentStatus.Cancelled;
        }
    } 

    static getDocumentPlanned(n : number) : Planned {
        if (n == 0) {
            return Planned.No;
        }
        else {
            return Planned.Yes;
        }
    }

    static getDocumentStatus(n : number) {
        if (n == 0) {
            return DocumentStatus.Draft;
        }
        else if (n == 1) {
            return DocumentStatus.Issued;
        }
        else if (n == 2) {
            return DocumentStatus.Cancelled;
        }
        else {
            return DocumentStatus.Executing;
        }
    }

    static getDeviceType(n: number) {
        if (n == 0){
            return DeviceType.Switch; 
        }
        else if (n == 1) {
            return DeviceType.Breaker;
        }
        else if (n == 2) {
            return DeviceType.Transformator;
        }
        else {
            return DeviceType.Disconnector;
        }
    }
}


/*
   public enum DeviceType { Switch = 0, Breaker, Transformator, Disconnector }

    public enum DocumentStatus { Draft = 0, Issued, Cancelled, Executing }

    public enum IncidentType { Unplanned = 0, Planned}

    public enum SelfAssign { No = 0, Yes}

    public enum IncidentStatus { Draft = 0, Dispatched, Executing, Completed, Cancelled}
*/
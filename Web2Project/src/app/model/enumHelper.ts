import { IncidentStatus, IncidentType, SelfAssign } from "./basicInformation";

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
}


/*
    public enum IncidentType { Unplanned = 0, Planned}

    public enum SelfAssign { No = 0, Yes}

    public enum IncidentStatus { Draft = 0, Dispatched, Executing, Completed, Cancelled}
*/
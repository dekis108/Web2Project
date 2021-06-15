using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DatabaseManager.Model
{
    /*
     export interface Call {
    reason : Reason;
    comment: string;
    malfunction: Malfunction;
    userData : UserData;
}

export enum Reason {
    NoPower = "No Power",
    Malfunction = "Malfunction",
    LightFlickering = "Light flickering",
    YesPower = "Power online",
    PartialCurrent = "Partial current",
    LowVotage = "Low voltage",
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
*/

    public class Call
    {
        [Key]
        [MaxLength(100)]
        public string Id { get; set; }
    }
}

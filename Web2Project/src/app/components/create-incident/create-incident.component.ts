import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {
  causeSelected !: string;
  formOption = FormOption.BasicInfo;

  constructor() { }

  IncidentType = [
    "Unplanned", 
    "Planned"
  ]
  IncidentStatus = [
    "Dispatched",
    "Draft",
    "Executing",
    "Cancelled",
    "Completed"
  ]

  Cause = [
    "Weather",
    "Maintenence",
    "Other",
  ]

  Subcause = new Map([
    ["Weather", ["Lightning", "Wind", "Other", "Fire"]],
    ["Maintenence", ["Planned", "Unplanned"]],
    ["Other" , ["Other"]],
  ]); 

  ConstructionType = [
    "None",
    "Other"
  ]

  Material = [
    "Metal",
    "Ceramic",
    "Other"
  ]

  onChange(deviceValue : any) {
    this.causeSelected = deviceValue.target.value;
    console.log(this.causeSelected);
  }


  profileForm = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
    priority: new FormControl(''),
    confirmed: new FormControl(''),
    status: new FormControl(''),
    lastName: new FormControl(''),
    ETA: new FormControl(''),
    ETATime: new FormControl(''),
    ATA: new FormControl(''),
    ATATime: new FormControl(''),
    outageTime: new FormControl(''),
    ETR: new FormControl(''),
    ETRTime: new FormControl(''),
    affectedCustomers: new FormControl(''),
    calls: new FormControl(''),
    voltage: new FormControl(''),
    scheduledTime: new FormControl(''),
    scheduledTimeTime: new FormControl(''),
    selfAssign: new FormControl(''),
    cause : new FormControl(''),
    subcause : new FormControl(''),
    constructionType : new FormControl(''),
    material : new FormControl(''),
  });
  

  ngOnInit(): void {
  }

  setBasicInfo() : void {
    this.formOption = FormOption.BasicInfo;
  }
  setDevices() : void {
    this.formOption = FormOption.Devices;
  }
  setResolution() : void {
    this.formOption = FormOption.Resolution;
  }
  setCalls() : void {
    this.formOption = FormOption.Calls;
  }
  setCrew() : void {
    this.formOption = FormOption.Crew;
  }
  setMultimedia() : void {
    this.formOption = FormOption.Multimedia;
  }

  onSubmit() : void {
    //console.log(this.profileForm.value['id']); //test
    console.log(this.Subcause.get("Weather"));
  }

}

export enum FormOption {
  BasicInfo = "BasicInfo",
  Devices = "Devices",
  Resolution = "Resolution",
  Calls = "Calls",
  Crew = "Crew",
  Multimedia = "Multimedia",
}
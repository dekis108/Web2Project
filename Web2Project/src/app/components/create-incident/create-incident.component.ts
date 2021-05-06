import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/model/devices';
import { DevicesLoaderService } from 'src/app/services/devicesLoader/devices-loader.service';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {
  causeSelected !: string;
  formOption = FormOption.BasicInfo;
  devices !: Device[];
  devicesSource = new MatTableDataSource<Device>(this.devices);
  displayedColumns: string[] = ['priority',];

  constructor(private devicesLoaderService: DevicesLoaderService) { }

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
    "Man-made",
    "Other",
  ]

  Subcause = new Map([
    ["Weather", ["Lightning", "Wind", "Other", "Blizzard"]],
    ["Maintenence", ["Planned", "Unplanned"]],
    ["Other" , ["Other"]],
    ["Man-made" , ["Other"]],
  ]); 

  ConstructionType = [
    "Underground",
    "Overground"
  ]

  Material = [
    "Metal",
    "Ceramic",
    "Other"
  ]

  onChange(deviceValue : any) {
    this.causeSelected = deviceValue.target.value;
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
    device : new FormControl(''),
  });
  

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices(): void {
    this.devicesLoaderService.getDevices().subscribe(devices => this.devices = devices);
    this.devicesSource = new MatTableDataSource<Device>(this.devices);
    console.log("DEJA" + this.devices);
    console.log("DEJA");
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
    console.log(this.profileForm.value); 
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
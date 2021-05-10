import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/model/devices';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Call } from 'src/app/model/calls';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {
  causeSelected !: string;
  formOption = FormOption.BasicInfo;
  devices !: Device[];
  calls !: Call[];
  devicesSource = new MatTableDataSource<Device>(this.devices);
  callsSource = new MatTableDataSource<Call>(this.calls);
  deviceColumns: string[] = ['priority', 'randomAttribute1','randomAttribute2'];
  callsColumn: string[] = ['reason', 'malfunction', 'comment'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }

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

  callForm = new FormGroup({
    reason : new FormControl(''),
    comment : new FormControl(''),
    hazzard : new FormControl(''),
    customer : new FormControl(''),
  });

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
    setTimeout(() => this.devicesSource.paginator = this.paginator);
    setTimeout(() => this.devicesSource.sort = this.sort);
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

  setCreateCall(): void {
    this.formOption = FormOption.CreateCall;
  }

  deviceDialog() : void {
    let dialogRef = this.dialog.open(DeviceDialogComponent, {data: {devices: this.devices}});
    dialogRef.afterClosed().subscribe(result => {
      console.log("ZATVOREN" + result.toString());
      this.devices = result;
      this.devicesSource = new MatTableDataSource<Device>(this.devices);
    });
  }

  onCreateCall() : void {
    //todo
  }

}

export interface DialogData {
  devices: Device[];
}

export interface CallData {
  calls: Call[];
}


export enum FormOption {
  BasicInfo = "BasicInfo",
  Devices = "Devices",
  Resolution = "Resolution",
  Calls = "Calls",
  Crew = "Crew",
  Multimedia = "Multimedia",
  CreateCall = "CreateCall",
}
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/model/devices';
import { DeviceDialogComponent } from '../device-dialog/device-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Call, Reason } from 'src/app/model/calls';
import { CallLoaderService } from 'src/app/services/callLoader/call-loader.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Customer } from 'src/app/model/cusomter';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {
  causeSelected !: string;
  devices: Device[] = [];
  devicesSource = new MatTableDataSource<Device>(this.devices);
  deviceColumns: string[] = ['priority', 'randomAttribute1','randomAttribute2'];
  fileUploading = false;
  imageFile : any;
  customer : any = null;


  formOption = FormOption.BasicInfo;


  ReasonType = [
    "No Power",
    "Malfunction",
    "Light flickering",
    "Power online",
    "Partial current",
    "Low voltage",
  ]

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


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    setTimeout(() => this.devicesSource.paginator = this.paginator);
    setTimeout(() => this.devicesSource.sort = this.sort);

  }

  
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
  

  onSubmit() : void {
    //todo
    console.log(this.profileForm.value); 
  }

  setBasicInfo() : void {
    this.formOption = FormOption.BasicInfo;
  }
  setEquipment() : void {
    this.formOption = FormOption.Equipment;
  }
  setMultimedia() : void {
    this.formOption = FormOption.Multimedia;
  }
  setHistory(): void {
    this.formOption = FormOption.History;
  }
  setChecklist(): void {
    this.formOption = FormOption.Checklist;
  }

  deviceDialog() : void {
    let dialogRef = this.dialog.open(DeviceDialogComponent, {data: {devices: this.devices}});
    dialogRef.afterClosed().subscribe(result => {
      console.log("ZATVOREN" + result.toString());
      this.devices = result;
      this.devicesSource = new MatTableDataSource<Device>(this.devices);
    });

  }
  uploadFile() : void {
    //todo
  }

  selectCustomer() : void {
    let customerRef = this.dialog.open(CustomerInfoComponent);
    customerRef.afterClosed().subscribe(result =>{
      console.log("zatvoreno biranje customera");
      this.customer = result[0];
      console.log(this.customer);
    })
  }
}

export enum FormOption {
  BasicInfo = "BasicInfo",
  Equipment = "Equipment",
  Multimedia = "Multimedia",
  History = "History",
  Checklist = "Checklist",
}


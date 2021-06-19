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
import { Router } from '@angular/router';
import { EnumHelper } from 'src/app/model/enumHelper';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.css']
})
export class CreateIncidentComponent implements OnInit {
  causeSelected !: string;
  formOption = FormOption.BasicInfo;
  devices: Device[] = [];
  callsFromDevice: Call[] = [];
  callsIndependent: Call[] = [];
  callsTotal : Call[] = [];
  devicesSource = new MatTableDataSource<Device>(this.devices);
  callsSource = new MatTableDataSource<Call>(this.callsTotal);
  deviceColumns: string[] = ['id', 'name', 'address','priority'];
  callsColumn: string[] = ['reason', 'malfunction', 'comment'];
  fileUploading = false;
  uploading: boolean = false;
  imageFiles= new FormData();
  images = new Map();
  customer !: Customer;
  url: string = "";



  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatPaginator) devicePaginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, public callService : CallLoaderService,  private router: Router) { }

  ReasonType = [
    "NoPower",
    "Malfunction",
    "LightFlickering",
    "YesPower",
    "PartialCurrent",
    "LowVoltage",
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

  onChange(deviceValue : any) {
    this.causeSelected = deviceValue.target.value;
  }

  callForm = new FormGroup({
    reason : new FormControl(''),
    comment : new FormControl('', Validators.required),
    hazzard : new FormControl('', Validators.required),
    hazzardPriority: new FormControl(''),
    customer : new FormControl(''),
  });

  profileForm = new FormGroup({
    type: new FormControl(''),
    priority: new FormControl(''),
    confirmed: new FormControl(false),
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
    selfAssign: new FormControl(false),
    cause : new FormControl(''),
    subcause : new FormControl(''),
    constructionType : new FormControl(''),
    material : new FormControl(''),
    device : new FormControl(''),
  });
  

  ngOnInit(): void {
    setTimeout(() => this.devicesSource.paginator = this.devicePaginator);

    setTimeout(() => this.callsSource.paginator = this.paginator);
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
    //todo
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
      this.loadCallsFromDevices();
    });
  }

  allDeviceIds : string = "";
  loadCallsFromDevices() {
    this.callsTotal.forEach(x =>{ //callsTotal.RemoveRange(callsFromDevice) u krstenom jeziku
      if (this.callsFromDevice.includes(x)) {
        this.callsTotal.splice(this.callsTotal.indexOf(x),1);
      }
    });

    this.callsFromDevice = [];
    this.devices.forEach(x => {
      this.allDeviceIds += x.id + ';';
    });
    console.log("!!ALLDEVICE IDS: " + this.allDeviceIds);
    this.callService.getCallsFromDevice(this.allDeviceIds).subscribe(
      (res: any) => {
        console.log(res);
        res.forEach((x: { customerId: any; reason: any; comment: any; created: any; malfunctionName: any; priority: any; }) => {
            this.callsFromDevice.push({
              customerId : x.customerId,
              reason : EnumHelper.getCallReason(x.reason).toString(),
              comment : x.comment,
              created : x.created,
              malfunction : {
                name : x.malfunctionName,
                priority : x.priority
              },
            });
        });
        this.callsFromDevice.forEach(x=>{
          this.callsTotal.push(x);
        });
        this.callsSource = new MatTableDataSource<Call>(this.callsTotal);
      },
      err => {
        console.log("Err: " + err.toString());
      }
    );
  } 

  reloadCalls() {
    this.callsIndependent.forEach(call => {
      this.callsTotal.push(call);
    });

    this.callsSource = new MatTableDataSource<Call>(this.callsTotal);
  }


  call!: Call;
  onCreateCall() : void {
    console.log("onCreateCall");
    if (this.callForm.value['reason'] == '' ) {
      alert("Must select an reason!");
      return;
    }
    if (this.customer == null) {
      alert("Must select an customer!");
      return;
    }

    this.call = {
      reason : this.callForm.value['reason'] ? this.callForm.value['reason'] : "empty",
      comment: this.callForm.value['comment'] ? this.callForm.value['comment'] : "empty",
      malfunction: {
        name : this.callForm.value['hazzard'] ? this.callForm.value['hazzard'] : "empty",
        priority: this.callForm.value['hazzardPriority'] ?this.callForm.value['hazzardPriority'] : 0,
      },
      customerId : this.customer.id,
      created: this.callForm.value['created'],
    }

    this.callService.postDevice(this.call).subscribe(
      (res: any) => {
        console.log("Uploadovan call");    
        //this.router.navigate(['/newIncident']);
        this.callsIndependent.push(this.call);
        this.reloadCalls();
        this.formOption = FormOption.Calls;
      },
      err => {
        console.log("Err: " + err.toString());
      }
    );

  }

  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.uploading = true;
      var reader = new FileReader();

      let fileToUpload = <File>event.target.files[0];
      this.imageFiles.append(fileToUpload.name, fileToUpload);

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      var temp: string;
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event != null) {
          this.url = event!.target!.result as string;
          if (this.images.has(this.url)) {
            this.uploading = false;
            return;
          }
          temp = event!.target!.result as string;;
          this.images.set(this.url,fileToUpload.name);
          console.log("!!!slika pushovana");
        }
        //this.ngOnInit();
      }
    }
    this.uploading = false;
  }

  deleteImage(image: string) {
    if (this.images.has(image)) {
      this.images.delete(image);
      //this.images = this.images.filter(obj => obj !== image);
    }
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
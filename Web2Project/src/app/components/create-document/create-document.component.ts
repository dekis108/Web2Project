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
import { DocumentStatus, HistoryChange } from 'src/app/model/securityDocument';
import {MatCardModule} from '@angular/material/card';

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
  currentDate : Date = new Date();
  thisUser : any = "Anonymous"; //mock
  historyChanges : HistoryChange[] = [];
  historyChangesSource =  new MatTableDataSource<HistoryChange>(this.historyChanges);
  historyColumns: string[] = ['user', 'datetime', 'status'];

  newChange !: HistoryChange;
  formOption = FormOption.BasicInfo;
  newDocumentStatus  = DocumentStatus.Draft;
  uploading: boolean = false;
  images: string[] = [];
  url: string = "";

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog) { }

  profileForm = new FormGroup({
    planned: new FormControl(''),
    datetime: new FormControl(''),
    details: new FormControl(''),
    notes: new FormControl(''),
    phoneNumber: new FormControl(''),
    createdBy: new FormControl(''),

    workOperationsCompleted: new FormControl(''),
    tagsRemoved: new FormControl(''),
    groundingRemoved: new FormControl(''),
    ready: new FormControl(''),
  });
  

  ngOnInit(): void {
    setTimeout(() => this.devicesSource.paginator = this.paginator);
    setTimeout(() => this.devicesSource.sort = this.sort);

  }

  
  onChange(deviceValue : any) {
    this.causeSelected = deviceValue.target.value;
  }

  setIssued() : void {
    if (this.newDocumentStatus == DocumentStatus.Issued) return;
    this.changeDocumentStatus(DocumentStatus.Issued);
  }

  setExecuting() : void {
    if (this.newDocumentStatus == DocumentStatus.Executing) return;
    this.changeDocumentStatus(DocumentStatus.Executing);
  }

  setCancelled() : void {
    if (this.newDocumentStatus == DocumentStatus.Cancelled) return;
    this.changeDocumentStatus(DocumentStatus.Cancelled);
  }


  changeDocumentStatus(newStatus: DocumentStatus) {
    this.newDocumentStatus = newStatus;

    this.newChange = {name: "Anonymous", lastName: "Anonymous", status: this.newDocumentStatus, datetime: new Date()};
    this.historyChanges.push(this.newChange);
    this.historyChangesSource =  new MatTableDataSource<HistoryChange>(this.historyChanges);
  }

  onSubmit() : void {
    //todo
    console.log(this.profileForm.value);
    console.log("!!!!submit pozvan"); 
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

  selectCustomer() : void {
    let customerRef = this.dialog.open(CustomerInfoComponent);
    customerRef.afterClosed().subscribe(result =>{
      console.log("zatvoreno biranje customera");
      this.customer = result[0];
      console.log(this.customer);
    })
  }

  
  fileImgFormData: any;
  onSelectFile(event: any) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      this.uploading = true;
      var reader = new FileReader();

      let fileToUpload = <File>event.target.files[0];
      this.fileImgFormData = new FormData();
      this.fileImgFormData.append('file', fileToUpload, fileToUpload.name);

      reader.readAsDataURL(event.target.files[0]); // read file as data url
      var temp: string;
      reader.onload = (event) => { // called once readAsDataURL is completed
        if (event != null) {
          this.url = event!.target!.result as string;
          if (this.images.includes(this.url)) {
            this.uploading = false;
            return;
          }
          console.log('!!!!!URL:' + this.url);
          temp = event!.target!.result as string;;
          this.images.push(this.url);
          console.log("!!!slika pushovana");
        }
        //this.ngOnInit();
      }
    }
    this.uploading = false;
  }

  deleteImage(image: string) {
    if (this.images.includes(image)) {
      this.images = this.images.filter(obj => obj !== image);
    }
  }


}

export interface DialogData {
  devices: Device[];
}


export enum FormOption {
  BasicInfo = "BasicInfo",
  Equipment = "Equipment",
  Multimedia = "Multimedia",
  History = "History",
  Checklist = "Checklist",
}


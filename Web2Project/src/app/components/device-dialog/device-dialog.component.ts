import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../create-incident/create-incident.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Device } from 'src/app/model/devices';
import { DevicesLoaderService } from 'src/app/services/devicesLoader/devices-loader.service';
import { SelectionModel } from '@angular/cdk/collections';
import { EnumHelper } from 'src/app/model/enumHelper';

@Component({
  selector: 'app-device-dialog',
  templateUrl: './device-dialog.component.html',
  styleUrls: ['./device-dialog.component.css']
})
export class DeviceDialogComponent {

  devices !: Device[];
  devicesSource = new MatTableDataSource<Device>(this.devices);
  displayedColumns: string[] = ['select', 'id', 'name', 'address','priority'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private devicesLoaderService: DevicesLoaderService,
    public dialogRef: MatDialogRef<DeviceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
  ngOnInit(): void {
    this.getDevices();
    setTimeout(() => this.devicesSource.paginator = this.paginator);
    setTimeout(() => this.devicesSource.sort = this.sort);
  }

  getDevices(): void {

    this.devices = [];
    this.devicesLoaderService.getDevices().subscribe(
      (res: any) => {
        console.log("!!!!!!!!!Sa servisa"  + res.toString());
        res.forEach((x: { id: any; type: any; name: any; address: any; coords: any; priority: any; }) =>
          this.devices.push({
            id: x.id,
            type: EnumHelper.getDeviceType(x.type),
            name: x.name,
            address: x.address,
            coords: x.coords,
            priority: x.priority,
            callIds: [],
          }));
        this.devicesSource = new MatTableDataSource<Device>(this.devices);
      },
      err => {
        console.log("!!!!!!!!!!!!!!Err: " + err);
        //alert(err);
      }
    );
  }


  selection = new SelectionModel<Device>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.devicesSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.devicesSource.data.forEach(row => this.selection.select(row));
  }

}

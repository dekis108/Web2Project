import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { BasicInformation, IncidentStatus, IncidentType, SelfAssign } from 'src/app/model/basicInformation';
import { Incident } from 'src/app/model/incident';
import { IncidentLoaderService } from 'src/app/services/incidentLoader/incident-loader.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatRadioChange } from '@angular/material/radio';
import { MinLengthValidator } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { FileDetector } from 'selenium-webdriver';
import { DocumentStatus } from 'src/app/model/securityDocument';
import { EnumHelper } from 'src/app/model/enumHelper';


@Component({
  selector: 'app-incident-browser',
  templateUrl: './incident-browser.component.html',
  styleUrls: ['./incident-browser.component.css']
})
export class IncidentBrowserComponent implements OnInit  {
  displayedColumns: string[] = ['id', 'type', 'priority','confirmed',  'status', 'ETA','ATA',
     'outageTime','ETR', 'affectedCustomers', 'calls','voltage', 'scheduledTime', 'selfAssign'];
  incidents: Incident[] = [];
  basicInfo: BasicInformation[] = [];
  radioOptions: string[] = ['All', 'Mine'];
  radioSelected = this.radioOptions[0];
  dataSource = new MatTableDataSource<BasicInformation>(this.basicInfo);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private incidentService: IncidentLoaderService) { }

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.getBasicInfo();
    this.dataSource.sort = this.sort;
  }

  getCallsNumber() {
    this.basicInfo.forEach(x =>{
      this.incidentService.getNumCalls(x.id).subscribe(
        (res: any) => {
          console.log(res);
          x.calls = res;
          this.dataSource = new MatTableDataSource<BasicInformation>(this.basicInfo);
          setTimeout(() => this.dataSource.paginator = this.paginator);
        },
        err => {
          console.log("Err: " + err);
          //alert(err);
        }
      );
    });
  }

  getBasicInfo(): void {
    this.basicInfo = [];
    this.incidentService.getBasicInfo().subscribe(
      (res: any) => {
        console.log("!!!!!!!!!Sa servisa"  + res.toString());
        res.forEach((x: { id: any; type: any; priority: any; confirmed: any; status: any; eta: any; ata: any; outageTime: any; etr: any; affectedCustomers: any; voltage: any; scheduledTime: any; selfAssigned: any; }) =>
          this.basicInfo.push({
            id: x.id,
            type: EnumHelper.getIncidentType(x.type),
            priority: x.priority,
            confirmed: x.confirmed,
            status: EnumHelper.getIncidentStatus(x.status),
            ETA:  new Date(x.eta).toDateString(),
            ATA : new Date(x.ata).toDateString(),
            outageTime: new Date(x.outageTime).toDateString(),
            ETR : new Date(x.etr).toDateString(),
            affectedCustomers: x.affectedCustomers,
            voltage: x.voltage, 
            scheduledTime : x.scheduledTime,
            selfAssign : EnumHelper.getSelfAssign(x.selfAssigned), 
            calls: 0,
          }));
          this.getCallsNumber();
      },
      err => {
        console.log("!!!!!!!!!!!!!!Err: " + err);
        //alert(err);
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @Output()
  change!: EventEmitter<MatRadioChange> 

  onChange(mrChange: MatRadioChange) {
    console.log(this.radioSelected);
    var filterText;
    filterText = this.radioSelected  == "All" ? "" : "Yes";
    this.dataSource.filter = filterText;
 } 

}

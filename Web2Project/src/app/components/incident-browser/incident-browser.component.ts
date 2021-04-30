import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BasicInformation } from 'src/app/model/basicInformation';
import { Incident } from 'src/app/model/incident';
import { IncidentLoaderService } from 'src/app/services/incidentLoader/incident-loader.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-incident-browser',
  templateUrl: './incident-browser.component.html',
  styleUrls: ['./incident-browser.component.css']
})
export class IncidentBrowserComponent implements AfterViewInit  {
  displayedColumns: string[] = ['id', 'type', 'status', 'outageTime','affectedCustomers', 'scheduledTime'];
  incidents: Incident[] = [];
  basicInfo: BasicInformation[] = [];

  dataSource = new MatTableDataSource<BasicInformation>(this.basicInfo);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(private incidentService: IncidentLoaderService) { }

  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.getBasicInfo();
  }

  getIncidents(): void {
    this.incidentService.getIncidents().subscribe(incidents => this.incidents = incidents);
  }

  getBasicInfo(): void {
    this.incidentService.getBasicInfo().subscribe(basicInfo => this.basicInfo = basicInfo);
    this.dataSource = new MatTableDataSource<BasicInformation>(this.basicInfo);
    //console.log(this.basicInfo.values);
  }

}

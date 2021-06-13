import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { BasicInformation } from 'src/app/model/basicInformation';
import { Incident } from 'src/app/model/incident';
import { IncidentLoaderService } from 'src/app/services/incidentLoader/incident-loader.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatRadioChange } from '@angular/material/radio';
import { MinLengthValidator } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';
import { FileDetector } from 'selenium-webdriver';
import { DocumentInfo, SecurityDocument } from 'src/app/model/securityDocument';
import { DocumentLoaderService } from 'src/app/services/documentLoader/document-loader.service';

@Component({
  selector: 'app-security-documents',
  templateUrl: './security-documents.component.html',
  styleUrls: ['./security-documents.component.css']
})
export class SecurityDocumentsComponent implements AfterViewInit {
  displayedColumns: string[] = ['startDate', 'phoneNumber', 'status', 'planned'];
  radioOptions: string[] = ['All', 'Mine'];
  radioSelected = this.radioOptions[0];
  securityDocuments : SecurityDocument[] = [];
  docsInfo : DocumentInfo[] = [];
  dataSource = new MatTableDataSource<DocumentInfo>(this.docsInfo);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private documentService: DocumentLoaderService) { }

  ngAfterViewInit(): void {
    console.log("Napusi mi se golog kurca.");
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.getDocumentsInfo();
    this.dataSource.sort = this.sort;
  }

//  getDocuments() : void {
//    this.documentService.getDocuments().subscribe(docs => this.securityDocuments = docs);
//    this.dataSource = new MatTableDataSource<SecurityDocument>(this.securityDocuments);
//    console.log("Ovaj ne pozivam" + this.dataSource);
//  }

  getDocumentsInfo() : void {
    this.documentService.getDocumentsInfo().subscribe(docsInfo => this.docsInfo = docsInfo);
    this.dataSource = new MatTableDataSource<DocumentInfo>(this.docsInfo);
    this.securityDocuments.forEach(element => {
      console.log(element);
    });
  }

  onChange(mrChange: MatRadioChange) {
    console.log(this.radioSelected);
    var filterText;
    filterText = this.radioSelected  == "All" ? "" : "Yes";
    this.dataSource.filter = filterText;
 }

 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}

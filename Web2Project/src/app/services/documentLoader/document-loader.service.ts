import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from 'src/app/model/devices';
import { DocumentInfo, SecurityDocument } from 'src/app/model/securityDocument';
import { Devices, Documents, DocumentsInfo } from '../incidentLoader/incidentsMock';

@Injectable({
  providedIn: 'root'
})
export class DocumentLoaderService {
  docs: SecurityDocument[] = [];
  docInfo: DocumentInfo[] = [];
  constructor(private http: HttpClient) { }

  getDocumentsMock() :  Observable<SecurityDocument[]> {
    //todo: get from backend
    this.docs = Documents;
    return of(this.docs);
  }

  getDocumentsInfoMock() : Observable<DocumentInfo[]> {
    this.docInfo = DocumentsInfo;
    return of(this.docInfo);
  }

  getDocumentsInfo() {
    return this.http.get('https://localhost:44356/SecurityDocument/getDocumentWidgetInfo')
  }

  getDocuments() {
    return this.http.get('https://localhost:44356/SecurityDocument/getSecurityDocuments')
  }
}

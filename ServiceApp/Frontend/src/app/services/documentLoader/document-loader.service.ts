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
  constructor() { }

  getDocuments() :  Observable<SecurityDocument[]> {
    //todo: get from backend
    this.docs = Documents;
    return of(this.docs);
  }

  getDocumentsInfo() : Observable<DocumentInfo[]> {
    //todo: get from backend
    this.docInfo = DocumentsInfo;
    return of(this.docInfo);
  }
}

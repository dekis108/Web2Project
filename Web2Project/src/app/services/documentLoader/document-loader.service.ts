import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from 'src/app/model/devices';
import { DocumentInfo, SecurityDocument } from 'src/app/model/securityDocument';

@Injectable({
  providedIn: 'root'
})
export class DocumentLoaderService {
  docs: SecurityDocument[] = [];
  docInfo: DocumentInfo[] = [];
  constructor(private http: HttpClient) { }

  getDocumentsInfo() {
    return this.http.get('https://localhost:44356/SecurityDocument/getDocumentWidgetInfo')
  }

  getDocuments() {
    return this.http.get('https://localhost:44356/SecurityDocument/getSecurityDocuments')
  }
}

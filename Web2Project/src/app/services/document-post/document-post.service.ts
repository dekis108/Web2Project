import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Device } from 'src/app/model/devices';
import { DocumentInfo, DocumentPost, SecurityDocument } from 'src/app/model/securityDocument';

@Injectable({
  providedIn: 'root'
})
export class DocumentPostService {

  constructor(private http: HttpClient) { }

  //"AddDocument/{planned}/{datetime}/{details}/{notes}/{phoneNumber}/{createdBy}/{workOperationsCompleted}/{tagsRemoved}/{groundingRemoved}/{ready}"
  postDocument(doc: DocumentPost) {
    console.log("!!!DOC");
    return this.http.put('https://localhost:44356/SecurityDocument/AddDocument/' + doc.planned + '/' + doc.datetime + '/'+ doc.details + '/'+ doc.notes + '/' 
          + doc.phoneNumber + '/'+ doc.createdBy + '/'+ doc.workOperationsCompleted + '/'+ doc.tagsRemoved + '/'+ doc.groundingRemoved + '/'+ doc.ready + '/' , null);

  }

  formData  = new FormData();
  postImage(image: string,docId : string, imageFile: any, countI : number ) {
    console.log("Uploadujem sliku sa imenom : " + image + "Image file" + imageFile);

    this.formData = new FormData();
    this.formData.append("file",imageFile );
    return this.http.post('https://localhost:44356/SecurityDocument/AddImage/' + docId + '/' + image + '/' + countI, this.formData);
  }

}

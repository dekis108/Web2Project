import { Component, OnInit } from '@angular/core';
import { DocumentInfo, DocumentStatus } from 'src/app/model/securityDocument';
import { DocumentLoaderService } from 'src/app/services/documentLoader/document-loader.service';

@Component({
  selector: 'app-my-safety-docs-widget',
  templateUrl: './my-safety-docs-widget.component.html',
  styleUrls: ['./my-safety-docs-widget.component.css']
})
export class MySafetyDocsWidgetComponent implements OnInit {


  drafts = 0;
  cancelled = 0;
  executing = 0;
  issued = 0;

  docs : DocumentInfo[] = [];

  constructor(private docsService: DocumentLoaderService) { }

  ngOnInit(): void {
    this.getDocsInfo();
  }

  getDocsInfo() : void {
    this.docsService.getDocumentsInfo().subscribe(
      (res: any) => {
        console.log("!!!!!!!!!Sa servisa"  + res.toString());
        this.drafts = res.drafts;
        this.cancelled = res.cancelled;
        this.executing = res.executing;
        this.issued = res.issued;
      },
      err => {
        console.log("!!!!!!!!!!!!!!Err: " + err);
        //alert(err);
      }
    );
  }

  private CountDocs() : void {
    this.docs.forEach(x => {
      switch(x.status) {
        case DocumentStatus.Draft: {
          this.drafts++;
          break;
        }
        case DocumentStatus.Cancelled: {
          this.cancelled++;
          break;
        }
        case DocumentStatus.Issued: {
          this.issued++;
          break;
        }
        case DocumentStatus.Executing: {
          this.executing++;
          break;
        }
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { BasicInformation, IncidentStatus, IncidentType } from 'src/app/model/basicInformation';
import { Incident } from 'src/app/model/incident';
import { IncidentLoaderService } from 'src/app/services/incidentLoader/incident-loader.service';

@Component({
  selector: 'app-my-incidents-widget',
  templateUrl: './my-incidents-widget.component.html',
  styleUrls: ['./my-incidents-widget.component.css']
})
export class MyIncidentsWidgetComponent implements OnInit {

  drafts = 0;
  cancelled = 0;
  executing = 0;
  completed = 0;

  incidents : BasicInformation[] = [];

  constructor(private incidentService: IncidentLoaderService) { }

  ngOnInit(): void {
    this.incidentService.getBasicInfo().subscribe(incidents => this.incidents = incidents);
    this.CountIncidents();
  }

  private CountIncidents() : void {
    this.incidents.forEach(x => {
      switch(x.status) {
        case IncidentStatus.Cancelled: {
          this.cancelled++;
          break;
        }
        case IncidentStatus.Draft: {
          this.drafts++;
          break;
        }
        case IncidentStatus.Executing: {
          this.executing++;
          break;
        }
        case IncidentStatus.Completed: {
          this.completed++;
          break;
        }
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Incident } from 'src/app/model/incident';

@Component({
  selector: 'app-incident-browser',
  templateUrl: './incident-browser.component.html',
  styleUrls: ['./incident-browser.component.css']
})
export class IncidentBrowserComponent implements OnInit {

  incident: Incident[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

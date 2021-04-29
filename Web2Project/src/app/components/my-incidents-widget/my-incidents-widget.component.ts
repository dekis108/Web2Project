import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}

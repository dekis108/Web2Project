import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyIncidentsWidgetComponent } from './components/my-incidents-widget/my-incidents-widget.component';
import { IncidentBrowserComponent } from './components/incident-browser/incident-browser.component';
import { MatTableModule } from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { CreateIncidentComponent } from './components/create-incident/create-incident.component';
import { MatRadioModule} from '@angular/material/radio';
import { MultimediaComponent } from './components/create-incident/formOptions/multimedia/multimedia.component';
import { CrewComponent } from './components/create-incident/formOptions/crew/crew.component';
import { CallsComponent } from './components/create-incident/formOptions/calls/calls.component';
import { ResolutionComponent } from './components/create-incident/formOptions/resolution/resolution.component';
import { DevicesComponent } from './components/create-incident/formOptions/devices/devices.component';
import { BasicInfoComponent } from './components/create-incident/formOptions/basic-info/basic-info.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyIncidentsWidgetComponent,
    IncidentBrowserComponent,
    CreateIncidentComponent,
    MultimediaComponent,
    CrewComponent,
    CallsComponent,
    ResolutionComponent,
    DevicesComponent,
    BasicInfoComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRippleModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

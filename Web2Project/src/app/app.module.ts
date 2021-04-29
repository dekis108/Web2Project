import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyIncidentsWidgetComponent } from './components/my-incidents-widget/my-incidents-widget.component';
import { IncidentBrowserComponent } from './components/incident-browser/incident-browser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyIncidentsWidgetComponent,
    IncidentBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

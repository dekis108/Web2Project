import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { CreateIncidentComponent } from './components/create-incident/create-incident.component';
import { DeviceViewComponent } from './components/device-view/device-view.component';
import { IncidentBrowserComponent } from './components/incident-browser/incident-browser.component';
import {LoginComponent} from "./components/login/login.component";
import { MyIncidentsWidgetComponent } from './components/my-incidents-widget/my-incidents-widget.component';
import { SecurityDocumentsComponent } from './components/security-documents/security-documents.component';

const routes: Routes = [
  { path: 'incidents', component: IncidentBrowserComponent},
  { path: "newIncident", component: CreateIncidentComponent},
  { path: "newDocument", component: CreateDocumentComponent},
  { path: 'devices', component: DeviceViewComponent},
  { path: 'dashboard', component: MyIncidentsWidgetComponent },
  { path: 'login', component: LoginComponent },
  { path: 'securityDocuments', component: SecurityDocumentsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

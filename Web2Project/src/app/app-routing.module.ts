import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidentBrowserComponent } from './components/incident-browser/incident-browser.component';
import {LoginComponent} from "./components/login/login.component";
import { MyIncidentsWidgetComponent } from './components/my-incidents-widget/my-incidents-widget.component';

const routes: Routes = [
  { path: 'incidents', component: IncidentBrowserComponent },
  { path: 'dashboard', component: MyIncidentsWidgetComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

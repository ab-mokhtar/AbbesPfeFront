import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { RefComponent } from './component/card/ref/ref.component';
import { DatesComponent } from './component/card/dates/dates.component';
import { PrioriteComponent } from './component/card/priorite/priorite.component';
import { ChargeComponent } from './component/card/charge/charge.component';
import { StatuComponent } from './component/card/statu/statu.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { DemandeComponent } from './demande/demande.component';
import { RestaurationComponent } from './authentification/restauration/restauration.component';
import { MaintenanceComponent } from './demande/maintenance/maintenance.component';
import { DASComponent } from './demande/das/das.component';
import { AmenagementComponent } from './demande/amenagement/amenagement.component';
import { AutreDComponent } from './demande/autre-d/autre-d.component';
import { DemandeinfoComponent } from './demande/demandeinfo/demandeinfo.component';
import { DemandenavComponent } from './demande/demandenav/demandenav.component';
import { ActionComponent } from './action/action.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModalDialogComponent } from './component/table/modal-dialog/modal-dialog.component';
import { DashchartComponent } from './dashboard/dashchart/dashchart.component';
import { Dashchart2Component } from './dashboard/dashchart2/dashchart2.component';
import { NoteComponent } from './dashboard/note/note.component';
import { UsernavComponent } from './component/usernav/usernav.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { LivraisonComponent } from './component/livraison/livraison.component';
import { LivraisondetailsComponent } from './component/livraison/livraisondetails/livraisondetails.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { AddActionComponent } from './component/Action/add-action/add-action.component';
import { ListeprioriteComponent } from './component/card/priorite/listepriorite/listepriorite.component';
import { ListestatuComponent } from './component/card/statu/listestatu/listestatu.component';
import { ListeChargeComponent } from './component/card/charge/liste-charge/liste-charge.component';
import { ListedatesComponent } from './component/card/dates/listedates/listedates.component';
import { ListerefComponent } from './component/card/ref/listeref/listeref.component';
import { ClientComponent } from './component/client/client.component';
import { PlanningComponent } from './component/planning/planning.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './component/forbidden/forbidden.component';
import { PopupComponent } from './component/popup/popup.component';
const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {path:'dashboard',component:DashboardComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'card',component:CardComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'table',component:TableComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'paramRef' ,component:RefComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'paramDate',component:DatesComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'paramPrio',component:PrioriteComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'paramChar',component:ChargeComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'paramStatu',component:StatuComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'menubar',component:MenubarComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'auth',component:AuthentificationComponent},
  {path:'demande',component:DemandeComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'maint',component:MaintenanceComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'reset',component:RestaurationComponent},
  {path:'amenag',component:AmenagementComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'das',component:DASComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'autre',component:AutreDComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'deminfo',component:DemandeinfoComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'demnav',component:DemandenavComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'action',component:ActionComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'modal',component:ModalDialogComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'chart',component:DashchartComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'chart2',component:Dashchart2Component,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'note',component:NoteComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'usernav',component:UsernavComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'agenda',component:AgendaComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'liv',component:LivraisonComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'livdetails',component:LivraisondetailsComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'home',component:UserDashboardComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'calendar',component:CalendarComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'AddAction',component:AddActionComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  {path:'listePri',component:ListeprioriteComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'listeStat',component:ListestatuComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'listeCharge',component:ListeChargeComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'listeDates',component:ListedatesComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'ListeRef',component:ListerefComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'client',component:ClientComponent,canActivate : [AuthGuard], data : {roles:['Admin']}},
  {path:'planning',component:PlanningComponent,canActivate : [AuthGuard], data : {roles:['team_leader','manager','dev']}},
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'addclient', component: PopupComponent },


  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

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
const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'card',component:CardComponent},
  {path:'table',component:TableComponent},
  {path:'paramRef' ,component:RefComponent},
  {path:'paramDate',component:DatesComponent},
  {path:'paramPrio',component:PrioriteComponent},
  {path:'paramChar',component:ChargeComponent},
  {path:'paramStatu',component:StatuComponent},
  {path:'menubar',component:MenubarComponent},
  {path:'auth',component:AuthentificationComponent},
  {path:'demande',component:DemandeComponent},
  {path:'maint',component:MaintenanceComponent},
  {path:'reset',component:RestaurationComponent},
  {path:'amenag',component:AmenagementComponent},
  {path:'das',component:DASComponent},
  {path:'autre',component:AutreDComponent},
  {path:'deminfo',component:DemandeinfoComponent},
  {path:'demnav',component:DemandenavComponent},
  {path:'action',component:ActionComponent},
  {path:'modal',component:ModalDialogComponent},
  {path:'chart',component:DashchartComponent},
  {path:'chart2',component:Dashchart2Component},
  {path:'note',component:NoteComponent},
  {path:'usernav',component:UsernavComponent},
  {path:'agenda',component:AgendaComponent},
  {path:'liv',component:LivraisonComponent},
  {path:'livdetails',component:LivraisondetailsComponent},
  {path:'home',component:UserDashboardComponent},
  {path:'calendar',component:CalendarComponent},
  {path:'AddAction',component:AddActionComponent},
  {path:'listePri',component:ListeprioriteComponent},
  {path:'listeStat',component:ListestatuComponent},
  {path:'listeCharge',component:ListeChargeComponent},
  {path:'listeDates',component:ListedatesComponent},
  {path:'ListeRef',component:ListerefComponent},
  {path:'client',component:ClientComponent},
  {path:'planning',component:PlanningComponent}

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

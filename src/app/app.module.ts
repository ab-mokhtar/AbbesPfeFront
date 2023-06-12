import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarComponent } from './component/menubar/menubar.component';
import { HomeComponent } from './component/home/home.component';
import { CardComponent } from './component/card/card.component';
import { TableComponent } from './component/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './component/popup/popup.component';
import { SearchPipe } from './component/table/search.pipe';
import { RefComponent } from './component/card/ref/ref.component';
import { DatesComponent } from './component/card/dates/dates.component';
import { StatuComponent } from './component/card/statu/statu.component';
import { ChargeComponent } from './component/card/charge/charge.component';
import { PrioriteComponent } from './component/card/priorite/priorite.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { DemandeComponent } from './demande/demande.component';
import { RestaurationComponent } from './authentification/restauration/restauration.component';
import { MaintenanceComponent } from './demande/maintenance/maintenance.component';
import { DASComponent } from './demande/das/das.component';
import { AmenagementComponent } from './demande/amenagement/amenagement.component';
import { AutreDComponent } from './demande/autre-d/autre-d.component';
import { DemandeinfoComponent } from './demande/demandeinfo/demandeinfo.component';
import { DemandenavComponent } from './demande/demandenav/demandenav.component';
import { ActionComponent } from './action/action.component';
import { ModalDialogComponent } from './component/table/modal-dialog/modal-dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashchartComponent } from './dashboard/dashchart/dashchart.component';
import { Dashchart2Component } from './dashboard/dashchart2/dashchart2.component';
import { NoteComponent } from './dashboard/note/note.component';
import { MaintpopupComponent } from './demande/maintpopup/maintpopup.component';
import { DaspopupComponent } from './demande/daspopup/daspopup.component';
import { AutreactpopupComponent } from './demande/autreactpopup/autreactpopup.component';
import { AmengpopupComponent } from './demande/amengpopup/amengpopup.component';
import { UsernavComponent } from './component/usernav/usernav.component';
import { AgendaComponent } from './component/agenda/agenda.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LivraisonComponent } from './component/livraison/livraison.component';
import { LivraisondetailsComponent } from './component/livraison/livraisondetails/livraisondetails.component';
import { LivrableComponent } from './component/livraison/livraisondetails/livrable/livrable.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { PopupCalendarComponent } from './component/calendar/popup-calendar/popup-calendar.component';
import { AddActionComponent } from './component/Action/add-action/add-action.component';
import { ListActionsComponent } from './component/Action/list-actions/list-actions.component';
import { ClientComponent } from './component/client/client.component';
import { PopupAjouterClientComponent } from './component/client/popup-ajouter-client/popup-ajouter-client.component';
import { PopupModifierClientComponent } from './component/client/popup-modifier-client/popup-modifier-client.component';
import { ToastrModule } from 'ngx-toastr';
import { ListeChargeComponent } from './component/card/charge/liste-charge/liste-charge.component';
import { UpdateChargeComponent } from './component/card/charge/update-charge/update-charge.component';
import { ListedatesComponent } from './component/card/dates/listedates/listedates.component';
import { UpdatedatesComponent } from './component/card/dates/updatedates/updatedates.component';
import { ListeprioriteComponent } from './component/card/priorite/listepriorite/listepriorite.component';
import { UpdateprioriteComponent } from './component/card/priorite/updatepriorite/updatepriorite.component';
import { ListerefComponent } from './component/card/ref/listeref/listeref.component';
import { UpdaterefComponent } from './component/card/ref/updateref/updateref.component';
import { ListestatuComponent } from './component/card/statu/listestatu/listestatu.component';
import { UpdatestatuComponent } from './component/card/statu/updatestatu/updatestatu.component';
import { DetailDemandeComponent } from './demande/detail-demande/detail-demande.component';
import { PlanningComponent } from './component/planning/planning.component';
import { DetailPlanningComponent } from './component/planning/detail-planning/detail-planning.component';
import { AddPlanningComponent } from './component/planning/add-planning/add-planning.component';
@NgModule({
  declarations: [
    PopupAjouterClientComponent,
    PopupModifierClientComponent,
    ClientComponent,
    AppComponent,
    MenubarComponent,
    HomeComponent,
    CardComponent,
    TableComponent,
    PopupComponent,
    SearchPipe,
    RefComponent,
    DatesComponent,
    StatuComponent,
    ChargeComponent,
    PrioriteComponent,
    AuthentificationComponent,
    DemandeComponent,
    RestaurationComponent,
    MaintenanceComponent,
    DASComponent,
    AmenagementComponent,
    AutreDComponent,
    DemandeinfoComponent,
    DemandenavComponent,
    ActionComponent,
    ModalDialogComponent,
    DashboardComponent,
    DashchartComponent,
    Dashchart2Component,
    NoteComponent,
    MaintpopupComponent,
    DaspopupComponent,
    AutreactpopupComponent,
    AmengpopupComponent,
    UsernavComponent,
    AgendaComponent,
    LivraisonComponent,
    LivraisondetailsComponent,
    LivrableComponent,
    UserDashboardComponent,
    CalendarComponent,
    PopupCalendarComponent,
    AddActionComponent,
    ListActionsComponent,
    ListeChargeComponent,
    UpdateChargeComponent,
    ListedatesComponent,
    UpdatedatesComponent,
    ListeprioriteComponent,
    UpdateprioriteComponent,
    ListerefComponent,
    UpdaterefComponent,
    ListestatuComponent,
    UpdatestatuComponent,
    DetailDemandeComponent,
    PlanningComponent,
    DetailPlanningComponent,
    AddPlanningComponent,
  ],
  imports: [
    FullCalendarModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

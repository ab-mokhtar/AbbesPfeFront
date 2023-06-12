import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions,EventClickArg  } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ActionService } from 'src/app/service/action.service';
import { Action } from 'src/app/Model/Action';
import { planifAction } from 'src/app/Model/calendar';
import { DetailPlanningComponent } from './detail-planning/detail-planning.component';
import { Planning } from 'src/app/Model/planning';
import { PlanningService } from 'src/app/service/planning.service';
import { AddPlanningComponent } from './add-planning/add-planning.component';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  planning!:Planning
  popup!:any

  act: planifAction=new planifAction()
 events:any[]=[
 ]
 plannings:Planning[]=[]
 calendarOptions: CalendarOptions = {
   initialView: 'dayGridMonth',
   plugins: [dayGridPlugin],
   eventClick: this.handleDateClick.bind(this) as any

 };
 constructor(private dialog: MatDialog,private planningService:PlanningService){}
 ngOnInit(): void {
 this.planningService.getAllPlanning().subscribe(async res=>{
   this.plannings=res
   console.log(this.plannings.length)
  await this.bindActions()
  
   console.log(this.events)
 })


 }
 closePopup() {
this.popup.closePopup()}
 async bindActions(){
   this.plannings.forEach(element => {
     let c={
      title:element.description,
      date:element.date,
      color:'#000FF',
      data:element,
  }
     this.events.push(c)

     
   });
   this.calendarOptions.events = this.events;
 }
 handleDateClick(arg:EventClickArg) {
  this.planning=arg.event.extendedProps['data'];
  console.log(this.planning);
  this.openDialog()
 }
 openDialog() {
   this.popup = this.dialog.open(DetailPlanningComponent, {
     width: '55%',
     height: '500px',
     enterAnimationDuration: '500ms',
     exitAnimationDuration: '500ms',
   });
   this.popup.componentInstance.planning = this.planning;

 }
 CreatePlanning() {
  this.popup = this.dialog.open(AddPlanningComponent, {
    width: '55%',
    height: '500px',
    enterAnimationDuration: '500ms',
    exitAnimationDuration: '500ms',
  });

}
}

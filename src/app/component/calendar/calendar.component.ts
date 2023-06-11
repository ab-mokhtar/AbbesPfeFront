import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions,EventClickArg  } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { PopupCalendarComponent } from './popup-calendar/popup-calendar.component';
import { ActionService } from 'src/app/service/action.service';
import { Action } from 'src/app/Model/Action';
import { planifAction } from 'src/app/Model/calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
   planning={projectid:0,tache:''}
   act: planifAction=new planifAction()
  events:any[]=[
    
  ]
  actions:Action[]=[]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    eventClick: this.handleDateClick.bind(this) as any

  };
  constructor(private dialog: MatDialog,private actionService:ActionService){}
  ngOnInit(): void {
  this.actionService.getAllAction().subscribe(async res=>{
    this.actions=res
    console.log(this.actions.length)
   await this.bindActions()
   
    console.log(this.events)
  })

 
  }
  async bindActions(){
    this.actions.forEach(element => {
      let c={
       title:element.demande.objetDemande,
       date:element.debutAction,
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
    var _popup = this.dialog.open(PopupCalendarComponent, {
      width: '55%',
      height: '500px',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
    });
    _popup.componentInstance.action = this.planning;

  }
}

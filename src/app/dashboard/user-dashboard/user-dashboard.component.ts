import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/service/action.service';
import { DemandeService } from 'src/app/service/demande.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  NbEmployers=0;
  NbDemandes=0;
  NbActions=0;
  NBDevs=0;
  NbManageurs=0;
  constructor(private userService:UserService,private demandeService:DemandeService,private actionService:ActionService){}
  ngOnInit(): void {
    this.userService.getnbAllUsers().subscribe(res=>{
      this.NbEmployers=res
    })
    this.userService.getnbUsersByRole("dev").subscribe(res=>{
      this.NBDevs=res
    })
    this.userService.getnbUsersByRole("Admin").subscribe(res=>{
      this.NbManageurs=res
    })
    this.actionService.getnbAllActions().subscribe(res=>{
      this.NbActions=res
    })
    this.demandeService.getnbAllDemandes().subscribe(res=>{
      this.NbDemandes=res
    })
  }
}

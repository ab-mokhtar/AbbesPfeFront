import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { Charge } from 'src/app/Model/charge';
import { Client } from 'src/app/Model/client';
import { Date } from 'src/app/Model/date';
import { DateType } from 'src/app/Model/date-type';
import { Demande } from 'src/app/Model/demande';
import { Priorite } from 'src/app/Model/priorite';
import { Reference } from 'src/app/Model/reference';
import { Statut } from 'src/app/Model/statut';
import { ChargeService } from 'src/app/service/charge.service';
import { ClientService } from 'src/app/service/client.service';
import { DemandeService } from 'src/app/service/demande.service';
import { PrioriteService } from 'src/app/service/priorite.service';
import { ReferenceService } from 'src/app/service/reference.service';
import { StatutService } from 'src/app/service/statut.service';
import { TypeDateService } from 'src/app/service/type-date.service';
@Component({
  selector: 'app-demandeinfo',
  templateUrl: './demandeinfo.component.html',
  styleUrls: ['./demandeinfo.component.css']
})

export class DemandeinfoComponent {
  typedates!: DateType[];
  selectedTypedate: any;
  selectedDate: any;
  lines!: Date[] ;
  demande: Demande = new Demande();
  charges!: Charge[];
  references!: Reference[];
  statuts!: Statut[];
  clients!: any[];
  priorites!: Priorite[];

  ajouterLigne() {
    if (this.lines.length < this.typedates.length) {
      const newLine = new Date()
      newLine.typeDate=new DateType()
      newLine.typeDate.id=-1
      this.lines.push(newLine);
    }
  }

  constructor(
    private demandeService: DemandeService,
    private chargeservice: ChargeService,
    private refernceservice: ReferenceService,
    private statusService: StatutService,
    private clientServiec: ClientService,
    private prioriteService: PrioriteService,
    private typeDateService:TypeDateService
  ) {}

  ngOnInit(): void {

    this.loadData();
    this.lines=this.demande.date
    console.log(this.typedates.length);
  }

  loadData(): void {
    this.typeDateService.getTypeDate().subscribe((data) => {
      this.typedates = data;
    });
    this.chargeservice.getAllCharges().subscribe((data) => {
      this.charges = data;
    });
    this.refernceservice.getAllReferences().subscribe((data) => {
      this.references = data;
    });
    this.statusService.getAllStatus().subscribe((data) => {
      this.statuts = data;
    });
    this.clientServiec.getAllClients().subscribe((data) => {
      this.clients = data;
      console.log(this.clients.length);
    });
    this.prioriteService.getAllpriorites().subscribe((data) => {
      this.priorites = data;
    });
  }

  onTypedateChange(type: any, index: number) {
    this.lines[index].typeDate = type;
    
  }

  closepopup() {}

  onDateChange(event: any, index: number): void {
    this.lines[index].valeurDate = event.value?.toLocaleDateString();
  }

  saveDemand() {
    this.lines = this.lines.filter(element => element.typeDate.id !== -1);
    let test = false;
  
    for (let i = 0; i < this.lines.length; i++) {
      for (let j = i + 1; j < this.lines.length; j++) {
        if (this.lines[i].typeDate.id === this.lines[j].typeDate.id) {
          test = true;
          break;
        }
      }
  
      if (test) {
        break;
      }
    }
  
    if (test) {
      alert("vous avez choisi le même typeDate 2 fois");
    } else {
     
      this.demande.date=this.lines
      console.log(this.demande)
      this.demandeService.updateDemande(this.demande.id,this.demande).subscribe(data => {
        console.log(data);
        this.demande = new Demande();
      });
    }
  }
  
}

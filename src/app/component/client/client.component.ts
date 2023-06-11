import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupAjouterClientComponent } from './popup-ajouter-client/popup-ajouter-client.component';
import { PopupModifierClientComponent } from './popup-modifier-client/popup-modifier-client.component';
import { ClientService } from 'src/app/service/client.service';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: any;
  constructor( 
    private dialog: MatDialog,
    private clientService: ClientService,
  
    ) { }

    ngOnInit(): void {

    this.getAllClient()
      }

      getAllClient() {
      
        this.clientService.getAllClients().subscribe((res) => {
          console.log(res);
          this.clients = res
        })
      }

      deleteClient(id: any) {
        this.clientService.deleteClient(id).subscribe((res) => {
          console.log(res);
        })
        alert('Suppression est effectué avec Succées');
      }

      searchText ='';

      createClient() {
        var _popup = this.dialog.open(PopupAjouterClientComponent, {
          width: '40%',
          enterAnimationDuration: '500ms',
          exitAnimationDuration: '500ms',
        });
      }

      updateClient(id:any) {
        var _popup = this.dialog.open(PopupModifierClientComponent, {
          width: '40%',
          enterAnimationDuration: '500ms',
          exitAnimationDuration: '500ms',
           data: {
            dataKey: id,
          }
        });
      }

}

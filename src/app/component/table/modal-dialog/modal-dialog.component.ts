import { Component, Output, EventEmitter, Input,OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
Prenom;
id;
Nom;
Email;
Profil; 
ImgProf;
Motdepasse;
    @Output() closeDialog = new EventEmitter<void>();
  @Input() selectedRow: any;
  employees: any[] | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any,private userservice:UserService){
    this.id = data.id
    this.Prenom = data.Prenom,
    this.Nom = data.Nom,
    this.Email = data.Email,
    this.Profil = data.profil,
    this.ImgProf = data.ImgProf,
    this.Motdepasse= data.Motdepasse
    }
  ngOnInit():void{
    this.employees = [
          {
            profilePicture: '../../../../assets/Image/emp1.jpg',
            lastName: 'Doe',
            firstName: 'John',
            email: 'john.doe@example.com',
            password: '********',
            profileType: 'Employé'
          },
          // Ajoutez d'autres employés ici
        ];
  }




  //   @Output() closeDialog = new EventEmitter<void>();
  // @Input() selectedRow: any;
  // employees: any[] | undefined;
  // constructor() {}
  // ngOnInit() {
  //   // Initialisation des données des employés
  //   this.employees = [
  //     {
  //       profilePicture: '../../../../assets/Image/emp1.jpg',
  //       lastName: 'Doe',
  //       firstName: 'John',
  //       email: 'john.doe@example.com',
  //       password: '********',
  //       profileType: 'Employé'
  //     },
  //     // Ajoutez d'autres employés ici
  //   ];
  // }

  closeModal(): void {
    this.closeDialog.emit();
  }
}

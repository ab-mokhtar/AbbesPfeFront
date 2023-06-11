import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { PopupComponent } from '../popup/popup.component';
import {MatDialogConfig} from '@angular/material/dialog';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/Model/user';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data!:User[] 
  id:any;
  Prenom: any;
  Nom: any;
  Email: any;
  Profil:any;
  Motdepasse:any;
  ImgProf:any;

 searchText ='';

  customerlist !: Customer[];
  dataSource: any;
  displayedColumns: string[] = ["code", "Nom", "email", "phone", "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService, private dialog: MatDialog, 
    private dialogRef : MatDialog,private userService:UserService ) {
      }
  ngOnInit(): void {
  this.userService.getAllUsers().subscribe(res=>{
    this.data=res
  })    
  }



  Filterchange(data: Event) {
    const value = (data.target as HTMLInputElement).value;
    this.dataSource.filter = value;
  }

  editcustomer(code: any) {
    this.Openpopup(code, 'Edit Customer');
  }

  handleButtonClick(row: any) {
    this.addcustomer(); // Call your addcustomer() method
    this.selectRow(row); // Call your selectRow() method
  }

  
  
  addcustomer(){
    this.Openpopup(0, 'Add Customer');
  }

  Openpopup(code: any, title: any,) {
    var _popup = this.dialog.open(PopupComponent, {
      width: '40%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      data: {
        title: title,
        code: code,
      }
    });

  }
  handleButtonClick1(row: any) {
    this.addcustomer();
    this.selectRow(row);
  
    // Populate the form with selected row values
    const { id, Nom, Prenom, Profil, Email } = row;
    const code = id; // Assuming code is the id property
    this.Openpopup(code, 'Edit Customer');
  }
  
  selectedRow: any;

  selectRow(row: any) {
    if (this.selectedRow === row) {
      this.selectedRow = null;
    } else {
      this.selectedRow = row;
      console.log(this.selectedRow);
      this.Prenom = this.selectedRow.Prenom;
    }
  }
  deleteUser(id:string){
    this.userService.deleteUser(id).subscribe(res=>{
      alert("user deleted")
    })
  }
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  openDialog() {

    this.dialogRef.open( ModalDialogComponent, 
      {
        data :{
            id : this.id,
            Prenom : this.Prenom,
            Nom : this.Nom,
            Email : this.Email,
            Profil : this.Profil,
            ImgProf : this.ImgProf,
            Motdepasse: this.Motdepasse,
  
          }
    });
}

}

  
  


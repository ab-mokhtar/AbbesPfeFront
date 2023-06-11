import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from 'src/app/Model/Role';
import { User } from 'src/app/Model/user';
import { MasterService } from 'src/app/service/master.service';
import { RoleService } from 'src/app/service/role.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata: any;
  editdata: any;
  closemessage = 'closed using directive';
  user: User = new User();
roles!:Role[]
role:Role=new Role()
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<PopupComponent>,
    private buildr: FormBuilder,
    private service: MasterService,
    private userService: UserService,
    private rolesService:RoleService
  ) {}

  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.setpopupdata(this.inputdata.code);
    }
    this.rolesService.getAllRoles().subscribe(data=>{
      this.roles=data
    })
  }

  setpopupdata(code: any) {
    this.service.GetCustomerbycode(code).subscribe(item => {
      this.editdata = item;
      this.myform.setValue({
        userLastName: this.editdata.Nom,
        userFirstName: this.editdata.Prenom,
        userEmail: this.editdata.email,
        userPassword: this.editdata.Motdepasse,
        phone: this.editdata.Tel,
        roles: this.editdata.Profil,
        active: this.editdata.status,
        address:this.editdata.address
      });
    });
  }

  closepopup() {
    this.ref.close('Closed using function');
  }

  myform = this.buildr.group({
    userLastName: this.buildr.control(''),
    userFirstName: this.buildr.control(''),
    userEmail: this.buildr.control(''),
    userPassword: this.buildr.control(''),
    phone: this.buildr.control(''),
    roles: this.buildr.control(''),
    active: this.buildr.control(true),
    address:this.buildr.control('')
  });

  Saveuser() {
  this.user.userEmail = this.myform.value.userEmail ?? '';
  this.user.uuid = '';
  this.user.userFirstName = this.myform.value.userFirstName ?? '';
  this.user.userLastName = this.myform.value.userLastName ?? '';
  this.user.userPassword = this.myform.value.userPassword ?? '';
  this.user.phone = this.myform.value.phone ?? '';
  this.user.address = this.myform.value.address ?? '';
  this.user.active = this.myform.value.active ?? false;
  this.user.actions = [];
  this.user.roles.push(this.role)
  console.log(this.user)
  this.userService.addUser(this.user).subscribe(res => {
    this.closepopup();
  });
}

  
}

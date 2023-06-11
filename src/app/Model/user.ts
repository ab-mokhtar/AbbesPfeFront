import { Action } from "./Action";
import { Role } from "./Role";

export class User {
    userEmail!: string;
    uuid!: string;
    userFirstName!: string;
    userLastName!: string;
    userPassword!: string;
    phone!: string;
    address!: string;
    active: boolean=false;
    actions!: Action[];
    roles: Role[]=[];
  }
  
  
  
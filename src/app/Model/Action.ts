import { Acteur } from "./Acteur";
import { Demande } from "./demande";
import { User } from "./user";

export class Action {
    id!: number;
    descriptionAction!: string;
    prochainAction!: string;
    demande!: Demande;
    user!: User;
  
    prioriteFiliere!: string;
    engagement!: string;
   
    debutAction!: string; // Assuming LocalDate is serialized as a string in the backend
    finAction!: string; // Assuming LocalDate is serialized as a string in the backend

}
import { ActionService } from "../service/action.service"
import { Action } from "./Action";

export class planifAction{
    title!:string;
    date!:string;
    color:string='#000FF';
    data!:Action;
}
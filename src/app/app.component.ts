import { Component } from '@angular/core';
import employeesJson from '../assets/employees.json';

interface EMPLOYEE{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularmaterial';

}

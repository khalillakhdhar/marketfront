import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName!:string;
  password!:string;
  constructor(router: Router) { }
  onSubmit() {
    console.log(this.userName+" "+this.password);
  }

}

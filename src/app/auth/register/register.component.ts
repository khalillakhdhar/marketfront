import { Component } from '@angular/core';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user={} as User;

}

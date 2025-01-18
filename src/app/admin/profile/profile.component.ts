import { Component } from '@angular/core';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user={} as User;
  update()
  {}

}

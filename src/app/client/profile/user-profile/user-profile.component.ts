import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-user-profile',
  standalone: false,

  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
user={} as User;
update()
{
  console.log(this.user);
}
}

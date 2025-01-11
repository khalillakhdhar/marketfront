import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent }, { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

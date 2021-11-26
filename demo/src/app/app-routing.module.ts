import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';


const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'viewUser', component: ViewUserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

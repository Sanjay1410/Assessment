import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ViewUserDetailsComponent } from './view-user-details/view-user-details.component';


const routes: Routes = [

  { path: '', component: UserComponent },
  { path: 'viewUser', component: ViewUserDetailsComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

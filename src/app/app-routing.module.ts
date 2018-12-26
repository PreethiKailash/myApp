import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FormsComponent } from './forms/forms.component';
import { AddressComponent } from './address/address.component';
import { ChildInputComponent } from './child-input/child-input.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/assignments', pathMatch: 'full' },
  { path: 'assignments', component:AssignmentsComponent},
  { path: 'forms', component:FormsComponent},
  { path: 'address', component:AddressComponent},
  // { path: 'child-input', component:ChildInputComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }

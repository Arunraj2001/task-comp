import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SamunnatiComponent } from './samunnati/samunnati.component';

const routes: Routes = [{
  path:'Profile',
  component:ProfileComponent
},
{
  path:'samunnati',
  component:SamunnatiComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

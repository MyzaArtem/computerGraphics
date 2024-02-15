import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InitialsComponent } from './components/initials/initials.component';
import { PictureComponent } from './components/picture/picture.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'initials',
    component: InitialsComponent
  },
  {
    path: 'picture',
    component: PictureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

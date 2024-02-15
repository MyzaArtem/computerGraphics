import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { InitialsComponent } from './components/initials/initials.component';
import { PictureComponent } from './components/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitialsComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

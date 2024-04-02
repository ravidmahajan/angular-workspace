import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NetflixRegisterComponent } from './netflix-register.component';


@NgModule({
  declarations: [
    AppComponent,
    NetflixRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [NetflixRegisterComponent],
  schemas: []
})
export class AppModule { }

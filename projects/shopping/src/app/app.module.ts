import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { NetflixRegisterComponent } from './components/netflix-register.component';
import { LoginComponent } from './components/login/login.component';
import { NetflixIndexComponent } from './Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Netflix/netflix-register/netflix-register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // bootstrap: [NetflixRegisterComponent],
  // bootstrap: [LoginComponent],
  bootstrap: [NetflixIndexComponent],
  schemas: []
})
export class AppModule { }

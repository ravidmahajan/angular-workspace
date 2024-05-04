import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { NetflixRegisterComponent } from './components/netflix-register.component';
import { LoginComponent } from './components/login/login.component';
import { NetflixIndexComponent } from './Netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './Netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './Netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './Netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DataBindingMVVMComponent } from './components/data-binding/data-binding.component-copy';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    DataBindingMVVMComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [NetflixRegisterComponent],
  // bootstrap: [LoginComponent],
  // bootstrap: [NetflixIndexComponent],
  // bootstrap: [DataBindingComponent],
  bootstrap: [DataBindingMVVMComponent],
  schemas: []
})
export class AppModule { }

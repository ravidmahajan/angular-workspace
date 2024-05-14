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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingMVVMComponent } from './components/data-binding/data-binding.component-copy';
import { FakestoreComponent } from './components/fakestore/fakestore.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { MobileDetailsComponent } from './components/mobile-details/mobile-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ForDemoComponent } from './components/for-demo/for-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NetflixIndexComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    DataBindingComponent,
    DataBindingMVVMComponent,
    FakestoreComponent,
    ContentProjectionComponent,
    MobileDetailsComponent,
    ProductDetailsComponent,
    ForDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  // bootstrap: [NetflixRegisterComponent],
  // bootstrap: [LoginComponent],
  // bootstrap: [NetflixIndexComponent],
  // bootstrap: [DataBindingComponent],
  // bootstrap: [DataBindingMVVMComponent],
  // bootstrap: [FakestoreComponent],
  // bootstrap: [ContentProjectionComponent],
  // bootstrap: [MobileDetailsComponent],
  // bootstrap: [ProductDetailsComponent],
  bootstrap: [ForDemoComponent],
  schemas: []
})
export class AppModule { }

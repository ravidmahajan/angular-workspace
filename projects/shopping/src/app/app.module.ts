import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
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
import { ShopperTemplateComponent } from './components/shopper-template/shopper-template.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { EmiComponent } from './components/emi/emi.component';
import { BmiComponent } from './components/bmi/bmi.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ProductsDataComponent } from './components/products-data/products-data.component';
import { FilterComponent } from './components/filter/filter.component';


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
    ForDemoComponent,
    ShopperTemplateComponent,
    ClassBindingComponent,
    EventBindingComponent,
    EmiComponent,
    ClassBindingComponent,
    BmiComponent,
    ParentComponent,
    ChildComponent,
    ProductsDataComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
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
  // bootstrap: [ForDemoComponent],
  // bootstrap: [ShopperTemplateComponent],
  // bootstrap: [ClassBindingComponent],
  // bootstrap: [EventBindingComponent],
  // bootstrap: [EmiComponent],
  // bootstrap: [ClassBindingComponent],
  // bootstrap: [BmiComponent],
  // bootstrap: [ParentComponent, ChildComponent],
  bootstrap: [ProductsDataComponent],
  schemas: []
})
export class AppModule { }

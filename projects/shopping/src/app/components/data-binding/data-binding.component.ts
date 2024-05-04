import { Component } from '@angular/core';

import {ProductContract} from '../../contracts/ProductContract';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  public username:string = "Ravi";
  public Stock:boolean = true;

  public tWidth:number = 200;
  public tHeight:number = 100;

  public Product: ProductContract = {
    Name: '',
    Price: 0,
    Stock: false,
    ShippedTo: ''
  }

  public UpdatedProduct: ProductContract = {
    Name: '',
    Price: 0,
    Stock: false,
    ShippedTo: ''
  }

  public RegisterClick(): void {
    this.UpdatedProduct = this.Product;
  }
}

import { Component, OnInit } from '@angular/core';

import {FakestoreProductContract} from '../../contracts/FakestoreProductContract'

@Component({
  selector: 'app-shopper-template',
  templateUrl: './shopper-template.component.html',
  styleUrl: './shopper-template.component.css'
})
export class ShopperTemplateComponent implements OnInit {
  constructor(){
  }

  public Categories: string[] = [];
  public selectedCategory = 'all';
  public Products: FakestoreProductContract[] = [];
  public cartItems: FakestoreProductContract[] = [];
  public cartItemsCount: number = 0;
  public isCartVisible: boolean = false;

  public LoadCategories(): void {
    fetch('http://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(data => {
      data.unshift("all");
      this.Categories = data;
    })
  } 

  public LoadProducts(url: string): void {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.Products = data;
    })
  }

  ngOnInit(): void {
    this.LoadCategories();
    this.LoadProducts('http://fakestoreapi.com/products');
    this.GetCartItemsCount();
  }

  public CategoryChanged(categoryName: string): void {
    this.selectedCategory = categoryName;
    if(categoryName == 'all'){
      this.LoadProducts('http://fakestoreapi.com/products');
    } else {
      this.LoadProducts(`http://fakestoreapi.com/products/category/${categoryName}`);
    }
  }

  public GetCartItemsCount(): void {
    this.cartItemsCount = this.cartItems.length;
  }

  public AddToCartClick(id: number): void {
    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => {
      this.cartItems.push(data);
      this.GetCartItemsCount();
      alert(`${data.title} Added to the Cart`);
    })
  }

  public ToggleCart(): void {
    this.isCartVisible = (this.isCartVisible == false) ? true: false;
  }

  public RemoveClick(index: number): void {
    var flag = confirm('Are you sure you want to delete?');
    if(flag == true){
      this.cartItems.splice(index, 1);
      this.GetCartItemsCount();
    }
  } 
}

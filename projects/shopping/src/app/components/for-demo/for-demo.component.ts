import { Component, OnInit } from '@angular/core';
import {FakestoreProductContract} from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrl: './for-demo.component.css'
})
export class ForDemoComponent implements OnInit {


  public Categories:string[] = ["All", "Electronics", "Footwear"];

  public Menu: {Category: string, Products: string[]}[] = [
    {
      Category: "Electronics",
      Products: ["Television", "Mobiles"]
    },
    {
      Category: "Footwear",
      Products: ["Sneakers", "Boots", "Casuals"]
    }
  ];
  
  public Products: {Name: string, Price: number}[] = [
    {Name: 'Samsung TV', Price: 500000},
    {Name: 'Sony TV', Price: 600000},
    {Name: 'Apple iPhone', Price: 100000}
  ]

  public fakeStoreProducts: FakestoreProductContract[] = [];

  constructor(){

  }

  ngOnInit(): void {
      fetch("http://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => this.fakeStoreProducts = data);
  }
}

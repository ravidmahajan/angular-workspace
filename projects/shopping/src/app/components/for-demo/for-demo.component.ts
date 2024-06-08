import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FakestoreProductContract} from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.css']
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

  public MarsObject: any = {};
  constructor(){

  }

  ngOnInit(): void {
      fetch("http://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => this.fakeStoreProducts = data);

      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response => response.json())
      .then(data => this.MarsObject = data);

  }

  public UpdateClick(){
    this.Products = [{Name: 'Samsung TV', Price: 500000},
    {Name: 'Sony TV', Price: 600000},
    {Name: 'Apple iPhone', Price: 100000},
    {Name: 'Watch', Price: 50000}
  ]
  }

  public TrackChanges(index: number){
    return index;
  }



}

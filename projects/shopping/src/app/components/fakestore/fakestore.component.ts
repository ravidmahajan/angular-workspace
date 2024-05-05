import { Component, OnInit } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-fakestore',
  templateUrl: './fakestore.component.html',
  styleUrl: './fakestore.component.css'
})
export class FakestoreComponent implements OnInit{

  public Count: number = 1;

  constructor(){

  }

  public Product: FakestoreProductContract = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {rate: 0, count: 0}
  }

  // constructor(){
  //   fetch("http://fakestoreapi.com/product/1")
  //   .then( response => response.json())
  //   .then(function(data){
  //     this.Product = data;
  //   });
  // }

  public LoadProduct(id: number):void {
    // fetch("http://fakestoreapi.com/product/1")
    // .then( function(response){ 
    //   return response.json();
    // })
    // .then(function(data){
    //   this.Product = data;
    // });

    fetch(`http://fakestoreapi.com/products/${id}`)
    .then(response =>  response.json())
    .then(data => this.Product = data);
  }

  ngOnInit(): void {
    // fetch("http://fakestoreapi.com/product/1")
    // .then( response => response.json())
    // .then(function(data){
    //   this.Product = data;
    // });

    this.LoadProduct(1);
  }

  public NextClick(): void {
    this.Count++;
    this.LoadProduct(this.Count);
  }

  public prevClick(): void {
    this.Count--;
    this.LoadProduct(this.Count);
  }


}

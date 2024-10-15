import { Component } from '@angular/core';
import { FakestoreProductContract } from '../../contracts/FakestoreProductContract';

@Component({
  selector: 'app-products-data',
  templateUrl: './products-data.component.html',
  styleUrl: './products-data.component.css'
})
export class ProductsDataComponent {
  public Products: FakestoreProductContract[] = [];
  public AllCount: number = 0;
  public ElectronicsCount: number = 0;
  public JeweleryCount: number = 0;
  public MensClothingCount: number = 0;
  public WomensClothingCount: number = 0;

  ngOnInit(): void {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      this.Products = data;
      this.AllCount = data.length;
      this.ElectronicsCount = data.filter((product: any) => product.category == 'electronics').length;
      this.JeweleryCount = data.filter((product: any) => product.category == 'jewelery').length;
      this.MensClothingCount = data.filter((product: any) => product.category == "men's clothing").length;
      this.WomensClothingCount = data.filter((product: any) => product.category == "women's clothing").length;
    });

  }

    public GetCategoryName(e: any){

      if(e == "all"){
        fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data => {
      this.Products = data;
    });
      } else {
        fetch(`https://fakestoreapi.com/products/category/${e}`)
        .then(response => response.json())
        .then(data => {
          this.Products = data;
        });
      }
  }
}

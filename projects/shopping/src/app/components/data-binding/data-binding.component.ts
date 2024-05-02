import { Component } from '@angular/core';

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
}

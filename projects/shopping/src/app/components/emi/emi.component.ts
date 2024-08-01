import { Component } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrl: './emi.component.css'
})
export class EmiComponent {
  public P:number = 10000;
  public r:number = 10.25;
  public n: number = 1;
  public EMI: number = 0;

  public AmountChange(e: any) {
    this.P = e.target.value;
  }

  public YearChange(e: any) {
    this.n = e.target.value;
  }

  public RateChange(e: any) {
    this.r = e.target.value;
  }

  public CalculateClick(){
    let r = this.r / 12 / 100;
    let n = this.n * 12;
    alert(`Period: ${n}\nRate: ${r}`);
    this.EMI = (this.P * r * Math.pow(1+ r, n)) / Math.pow(1+ r, n) - 1;
  }
}

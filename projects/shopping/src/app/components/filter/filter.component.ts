import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input() public AllCount: number = 0;
  @Input() public ElectronicsCount: number = 0;
  @Input() public JeweleryCount: number = 0;
  @Input() public MensClothingCount: number = 0;
  @Input() public WomensClothingCount: number = 0;

  public CategoryName: string = "all";

  @Output() public CategoryChanged: EventEmitter<string> = new EventEmitter<string>();

  public SendCategoryName(e: any){
    this.CategoryChanged.emit(e.target.value);
  }
}

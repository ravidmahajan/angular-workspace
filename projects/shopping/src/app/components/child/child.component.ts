import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() public MsgFromParent: string = "";

  @Output() public ChildClick: EventEmitter<string> = new EventEmitter<string>();

  public ChildButtonClick(){
    this.ChildClick.emit("Hello! from Child");
  }
}

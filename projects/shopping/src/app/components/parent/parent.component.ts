import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public msg: string = "Initial message";
  public MsgFromChild: string = "";

  public SendClick(){
    this.msg = "Hello from Parent!"; 
  }

  public GetMessageFromChild(e: string){
     this.MsgFromChild = e;
  }
}

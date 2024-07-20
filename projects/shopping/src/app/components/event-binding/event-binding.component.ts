import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  public img_src: string = "assets/shoe.png";

  public styleObject: {position: string, left: string, top: string} = {
    position: "",
    left: "",
    top: ""
  };

  public InsertClick(e: any): void {
    document.write(`
            Button Id: ${e.target.id} <br>
            Button Name: ${e.target.name} <br>
            Button Class: ${e.target.className} <br>
            X Position: ${e.clientX} <br>
            Ctrl Key: ${e.ctrlKey} <br>
            `);
  }

  public InsertClicked(e: any, msg: string): void {
    document.write(`
            Button Id: ${e.target.id} <br>
            Button Name: ${e.target.name} <br>
            Button Class: ${e.target.className} <br>
            X Position: ${e.clientX} <br>
            Ctrl Key: ${e.ctrlKey} <br>
            <h2> ${msg} </h2>
            `);
  }

  public setColor(colorName: string){
    switch(colorName){
      case "red":
        this.img_src = "assets/redshoe.png";
        break;
      case "black":
        this.img_src = "assets/blackshoe.png";
        break;
      case "yellow":
        this.img_src = "assets/yellowshoe.png";
        break;
    }
  }

  public MouseMove(e: any){
    this.styleObject = {
      position: "fixed",
      left: e.clientX + "px",
      top: e.clientY + "px"
    }
  }
}

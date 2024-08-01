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
<<<<<<< HEAD

  public users: any[] = [
    {UserName: 'john'},
    {UserName: 'john12'},
    {UserName: 'john_nit'},
    {UserName: 'david'}
  ]

  public userError = '';
  public isInvalid: boolean = false;
  public pwdError: string = '';
  public isPwdWarnVisible: boolean = false;

  public VerifyUser(e: any) {
    for(var user of this.users){
      if(user.UserName == e.target.value){
        this.userError = 'UserName is taken - Try Another';
        this.isInvalid = true;
      } else {
        this.userError = 'UserName Available'
        this.isInvalid = false;
      }
    }
  }

  public VerifyPassword(e: any) {
    if(e.keyCode >=65 && e.keyCode <=90) {
      this.isPwdWarnVisible = true;
    } else {
      this.isPwdWarnVisible = false;
    }
  }

  public VerifyRequired(e: any){
    if(e.target.value == ''){
      this.userError = 'Required Field';
      this.isInvalid = true;
    } else {
      this.userError = '';
    }
  }

  public PasswordFocus(){
    this.pwdError = 'Caps Not Allowed';
  }

  public PasswordBlur(){
    this.pwdError = '';
  }

=======
>>>>>>> parent of aba494c (keyboard events)
}

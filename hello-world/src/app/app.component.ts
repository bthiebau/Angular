import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhoAmIComponent } from "./who-am-i/who-am-i.component";
import { AnimationComponent } from "./animation/animation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoAmIComponent, AnimationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  currentSelectedIndex: number = 0;
  isAsc: boolean = true;
  lastname1 = "Le Goat";
  firstname1 = "Bastien";

  user = [
    {
      firstname: "Bastien",
      lastname: "l'objet"
    },
    {
      firstname: "Maxence",
      lastname: "Emery"
    },
    {
      firstname: "Thomas",
      lastname: "Chevalier"
    }
  ];

  onChangeUserClicked(action: string) {
    if( action === 'next' && this.currentSelectedIndex < this.user.length - 1){
      this.currentSelectedIndex++
      console.log(this.currentSelectedIndex)
    }
    if(action === "prev" && this.currentSelectedIndex > 0){
      this.currentSelectedIndex--
      console.log(this.currentSelectedIndex)
    }
    if(action === 'auto'){
      if(this.currentSelectedIndex < this.user.length - 1 && this.isAsc === true){
        this.currentSelectedIndex++
      }
  
      if(this.currentSelectedIndex > 0 && this.isAsc === false){
        this.currentSelectedIndex--
      }
  
      if(this.currentSelectedIndex === this.user.length-1){
        this.isAsc = false;
      }
  
      if(this.currentSelectedIndex === 0){
        this.isAsc = true;
      }
    }
  }

  
}

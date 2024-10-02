import { Component } from '@angular/core';
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-exo3',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.scss'
})
export class Exo3Component {
  count: number = 0;
  onButtonClicked(){
    this.count++;
  }

}

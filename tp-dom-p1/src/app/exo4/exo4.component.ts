import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-exo4',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './exo4.component.html',
  styleUrl: './exo4.component.scss'
})
export class Exo4Component {
  data = [
    {
      name: "Dog",
      picture: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg",
      shout: "bark bark"
    }
  ]
  onShoutButtonClick(shout: string){
    alert(`${shout}`);
  }
}

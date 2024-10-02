import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input()
  name: string = "animal";

  @Input()
  picture: string ="";


  @Output()
  shoutButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  onClickButton(){
    this.shoutButtonClicked.emit();
  }

}

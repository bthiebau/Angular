import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Output()
  clickedButton: EventEmitter<void> = new EventEmitter<void>();

  onClickButton(){
    this.clickedButton.emit()
  }

}

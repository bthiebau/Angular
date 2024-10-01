import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-who-am-i',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './who-am-i.component.html',
  styleUrl: './who-am-i.component.scss'
})
export class WhoAmIComponent {
  @Input({required: true})
  firstname: string | undefined = undefined

  @Input({required: true})
  lastname: string = "Thiebaut"

  isEnd: boolean = false

  @Output()
  changeUserClicked: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  switchUserClicked: EventEmitter<void> = new EventEmitter<void>();


  onClickChangeUser (action: string) {
    this.changeUserClicked.emit(action)
  }

  onClickSwitchUser() {
    this.switchUserClicked.emit()
  }
}

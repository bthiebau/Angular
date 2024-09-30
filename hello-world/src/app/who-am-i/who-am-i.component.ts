import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  isShowNameDisabled: boolean = true

  constructor () {
    setTimeout(() => {
      this.firstname = 'Bastien'
      this.isShowNameDisabled = false
    }, 4000)
  }

  onClickChangeName () {
    this.firstname = "goat"
  }
}

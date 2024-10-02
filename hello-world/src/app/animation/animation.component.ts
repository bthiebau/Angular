import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-animation',
  standalone: true,
  imports: [NgStyle , NgIf],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.scss'
})
export class AnimationComponent {

  squareStyles: any;
  isSquareReady: boolean;

  constructor(){
    this.isSquareReady = false;

    this.squareStyles = {
      position: 'relative',
      width: '100px',
      height: '100px',
      backgroundColor: 'black',
      top: '0px',
      left: '0px'
    };

    let i = 0;
    const squareInit = setInterval(() => {
      this.squareStyles.left = parseInt(this.squareStyles.left) + 10 + 'px';
      this.squareStyles.top = parseInt(this.squareStyles.top) + 10 + 'px';
      i++
      if(i === 25) {
        this.isSquareReady = true;
        clearInterval(squareInit)
      }
    }, 100)
  }

  /**
 * Method called when the user click on one of the 4 buttons
 * @param to
 */
  move(to: string) {

    switch (to) {
      case 'left':
        this.squareStyles.left = parseInt(this.squareStyles.left) - 10 + 'px';
        break;
      case 'top':
        this.squareStyles.top = parseInt(this.squareStyles.top) - 10 + 'px';
        break;
      case 'bottom':
        this.squareStyles.top = parseInt(this.squareStyles.top) + 10 + 'px';
        break;
      case 'right':
        this.squareStyles.left = parseInt(this.squareStyles.left) + 10 + 'px';
        break;
      default:
        console.error('Erreur !');
    }

  }
}

import { NgOptimizedImage } from '@angular/common'
import { Component, Input } from '@angular/core'
import { Car } from '../../pages/home/home.component'


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) selectedCar: Car
}
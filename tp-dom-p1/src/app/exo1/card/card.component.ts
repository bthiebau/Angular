import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input()
  title: string = "Titre";

  @Input()
  underTitle: string = "Sous titre";

  @Input()
  description: string = "Content blbllblblblbllblblbllblblblbllblblblbl";

  @Input()
  link: string = "https://github.com/bthiebau"

}

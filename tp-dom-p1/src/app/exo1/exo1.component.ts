import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
@Component({
  selector: 'app-exo1',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss'
})
export class Exo1Component {
  content = [
    {
      title: "Titre 1",
      underTitle: "Sous titre 1",
      description: "Content blblblbl",
      link: "https://github.com/bthiebau"
    },
    {
      title: "Titre 2",
      underTitle: "Sous titre 2",
      description: "Content blblblbl",
      link: "https://github.com/bthiebau"
    },
    {
      title: "Titre 3",
      underTitle: "Sous titre 3",
      description: "Content blblblbl",
      link: "https://github.com/bthiebau"
    },
    {
      title: "Titre 4",
      underTitle: "Sous titre 4",
      description: "Content blblblbl",
      link: "https://github.com/bthiebau"
    }
  ]
}

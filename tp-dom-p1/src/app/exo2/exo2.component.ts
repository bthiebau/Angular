import { Component, Input } from '@angular/core';
import { TableComponent } from './table/table.component';


@Component({
  selector: 'app-exo2',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './exo2.component.html',
  styleUrl: './exo2.component.scss'
})
export class Exo2Component {
  content = [
    {
      id: 1,
      email: "1@1.fr",
      username: "user1"
    },
    {
      id: 2,
      email: "2@2.fr",
      username: "user2"
    },
    {
      id: 3,
      email: "3@3.fr",
      username: "user3"
    }
  ]
}

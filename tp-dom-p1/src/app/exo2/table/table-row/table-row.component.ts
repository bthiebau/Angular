import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  standalone: true,
  imports: [],
  templateUrl: './table-row.component.html',
  styleUrl: './table-row.component.scss'
})
export class TableRowComponent {
  @Input()
  id: number = 0;

  @Input()
  email: string = "mail@pardefaut.fr"

  @Input()
  username: string = "userdefault";

}

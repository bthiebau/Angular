import { Component, Input } from '@angular/core';
import { TableRowComponent } from './table-row/table-row.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableRowComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input()
  content = [
    {
      id: 0,
      email: "",
      username: ""
    },
    {
      id: 0,
      email: "",
      username: ""
    },
    {
      id: 0,
      email: "",
      username: ""
    }
  ]
}

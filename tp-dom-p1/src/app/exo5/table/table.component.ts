import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: '[app-table]',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input()
  id: number = 0;

  @Input()
  brand: string = "";

  @Input()
  model: string = "";

  @Output()
  detailButtonClicked: EventEmitter<void> = new EventEmitter<void>();

  onDetailButtonClick(){
    this.detailButtonClicked.emit()
  }
}

import { Component } from '@angular/core';
import { TableComponent } from "../exo5/table/table.component";

@Component({
  selector: 'app-exo5',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './exo5.component.html',
  styleUrl: './exo5.component.scss'
})
export class Exo5Component {
  data = [
    {
      id: 0,
      brand: "Peugeot",
      model: "208"
    },
    {
      id: 1,
      brand: "Lamborghini",
      model: "Countach"
    },
    {
      id: 2,
      brand: "Opel",
      model: "Corsa"
    }
  ]

  onDetailButtonClick(){
    
  }
}

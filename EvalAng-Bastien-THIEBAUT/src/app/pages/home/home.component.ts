import { CommonModule, NgIf } from '@angular/common'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { CardComponent } from '../../components/card/card.component'
import { TableComponent } from '../../components/table/table.component'


export interface Car {
  id: number
  brand: string
  model: string
  picture: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, TableComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cars: Car[] = [
    { id: 1, brand: 'BMW', model: 'X5', picture: 'bmw-x5.jpg' },
    { id: 2, brand: 'Audi', model: 'Q5', picture: 'audi-q5.jpg' },
    { id: 3, brand: 'Mercedes', model: 'GLE', picture: 'mercedes-gle.jpg' }
  ]
  selectedCar: Car 

  onClickChangeSelectedCar (idCar: number): void {
    this.selectedCar = this.cars.find(car => car.id === idCar)
  }

  onClickDeteleSelectedCar (idCar: number): void {
    // Trouver l'index de l'élément à supprimer
    const index = this.cars.findIndex(car => car.id === idCar);

    // Supprimer l'élément du tableau s'il existe
    if (index !== -1) {
      this.cars.splice(index, 1);
      
      // Réattribuer les ids de façon séquentielle
      this.cars.forEach((car, idx) => {
        car.id = idx + 1; // Les IDs commencent à 1
      });
    }
  }
}
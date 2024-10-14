import { CommonModule, NgIf } from '@angular/common'
import { Component, inject } from '@angular/core'
import { CardComponent } from '../../components/card/card.component'
import { TableComponent } from '../../components/table/table.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Car } from '../../entities/car.entity'
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly router =inject(Router)

  cars: Car[] = [
    { id: 1, brand: 'BMW', model: 'X5', picture: 'bmw-x5.jpg' },
    { id: 2, brand: 'Audi', model: 'Q5', picture: 'audi-q5.jpg' },
    { id: 3, brand: 'Mercedes', model: 'GLE', picture: 'mercedes-gle.jpg' }
  ]
  selectedCar: Car;
  searchTerm: string = '';
  filteredCars: Car[] = [...this.cars];


  applyFilter(): void {
    const filterValue = this.searchTerm.toLowerCase();

    if (filterValue.length >= 3) {
      this.filteredCars = this.cars.filter(car =>
        car.brand.toLowerCase().startsWith(filterValue) ||
        car.model.toLowerCase().startsWith(filterValue)
      );
    } else {
      this.filteredCars = [...this.cars];
    }
  }
  
  onClickChangeSelectedCar (idCar: number): void {
    this.selectedCar = this.cars.find(car => car.id === idCar)
  }

  onClickDeteleSelectedCar (idCar: number): void {
    //On cherche l'index correspondant à l'ID passé en param
    const index = this.cars.findIndex(car => car.id === idCar);

    // Supprime la row correspondant a l'id et reaffecte les id dans l'ordre numérique
    if (index !== -1) {
      this.cars.splice(index, 1);
      this.cars.forEach((car, idx) => {
        car.id = idx + 1;
      });
      this.applyFilter();
    }
  }

  onClickAddCar (): void {
    this.router.navigate(['/nouvelle-voiture'])
  }
}
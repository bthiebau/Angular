import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Car {
  id: number;
  brand: string;
  model: string;
  picture: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {

  
  private carsSubject = new BehaviorSubject<Car[]>([
    { id: 1, brand: 'BMW', model: 'X5', picture: 'bmw-x5.jpg' },
    { id: 2, brand: 'Audi', model: 'Q5', picture: 'audi-q5.jpg' },
    { id: 3, brand: 'Mercedes', model: 'GLE', picture: 'mercedes-gle.jpg' }
  ]);
  // Observable pour que d'autres composants puissent s'y abonner
  cars$ = this.carsSubject.asObservable();

  getCars(): Car[] {
    return this.carsSubject.value;
  }

  addCar(car: Car): void {
    const cars = this.getCars();
    //Assigner un nouvel ID (le prochain ID disponible)
    const newId = cars.length ? cars[cars.length - 1].id + 1 : 1;
    const newCar = { ...car, id: newId };
    this.carsSubject.next([...cars, newCar]); // Met à jour la liste des voitures
  }
}
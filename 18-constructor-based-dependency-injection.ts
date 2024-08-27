import {Injectable} from '@angular/core';
import {Component, inject} from '@angular/core';
// import {CarService} from './car.service';


// app/car.service.ts

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];

  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}



// app/app.component.ts

@Component({
  selector: 'app-root',
  template: `
    <p>Car Listing: {{ display }}</p>
  `,
  standalone: true,
})
export class AppComponent {
  display = '';

  constructor(
    private carService: CarService
  ) {
        this.display = this.carService.getCars().join(' ⭐️ ');
  }
}

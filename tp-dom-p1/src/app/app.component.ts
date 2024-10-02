import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { Exo2Component } from "./exo2/exo2.component";
import { Exo3Component } from "./exo3/exo3.component";
import { Exo4Component } from "./exo4/exo4.component";
import { Exo5Component } from "./exo5/exo5.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Exo1Component, Exo2Component, Exo3Component, Exo4Component, Exo5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}

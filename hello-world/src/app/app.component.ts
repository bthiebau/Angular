import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WhoAmIComponent } from "./who-am-i/who-am-i.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WhoAmIComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  lastname1 = "Le Goat"
  firstname1 = "Bastien"
  lastname2 = "Le Chad"
  fisrtname2 = "Bastien"
  tab = [
    {
      firstname: "Bastien",
      lastname: "l'objet"
    },
    {
      firstname: "Maxence",
      lastname: "Emery"
    }
  ]
}

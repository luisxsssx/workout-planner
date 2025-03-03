import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../../layout/home-navbar/home-navbar.component";

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [HomeNavbarComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {

}

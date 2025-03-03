import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../../layout/home-navbar/home-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-routines',
  standalone: true,
  imports: [HomeNavbarComponent, RouterLink],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.css'
})
export class RoutinesComponent {

}
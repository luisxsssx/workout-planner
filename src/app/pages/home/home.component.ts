import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../../layout/home-navbar/home-navbar.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeNavbarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

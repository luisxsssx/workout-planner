import { Component } from '@angular/core';
import { HomeNavbarComponent } from "../../layout/home-navbar/home-navbar.component";

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [HomeNavbarComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {

}

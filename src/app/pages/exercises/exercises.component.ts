import { Component, NgModule } from '@angular/core';
import { HomeNavbarComponent } from "../../layout/home-navbar/home-navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { link } from 'node:fs';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [HomeNavbarComponent, CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {
  showForm = false;
  showCard = false;

  formData = {
    name: '',
    duration: '',
    sets: '',
    reps: '',
    link: ''  // Youtube video link (optional)
  };

  submittedData = {
    name: '',
    duration: '',
    sets: '',
    reps: '',
    link: ''
  };

  toggleForm() {
    this.showForm = !this.showForm;
    if (!this.showForm) {
      this.showCard = false;
    }
  }

  clear() {
    this.formData = { name: '', duration: '', sets: '', reps: '', link: '' };
  }

  onSubmit() {
    this.submittedData = { ...this.formData };
    this.showCard = true;
    this.showForm = false;
    this.formData = { name: '', duration: '', sets: '', reps: '', link: '' };
  }
}
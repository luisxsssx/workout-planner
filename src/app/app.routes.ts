import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RoutinesComponent } from './pages/routines/routines.component';
import { ExercisesComponent } from './pages/exercises/exercises.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { CreateRoutineComponent } from './pages/routine-components/create-routine/create-routine.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'routines', component: RoutinesComponent },
    { path: 'exercises', component: ExercisesComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'create-routine', component: CreateRoutineComponent }
];

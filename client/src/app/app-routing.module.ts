import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Route[] = [
  { path: '', component:  MoviesComponent},
  { path: 'my-reservations', component: ReservationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

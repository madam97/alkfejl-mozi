import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { ReservationsComponent } from './reservations/reservations.component';
import { MoviesComponent } from './movies/movies.component';
import { OneMovieComponent } from './one-movie/one-movie.component';
import { HomeComponent } from './home/home.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Route[] = [
  { path: '', component:  HomeComponent},
  { path: 'movies', component:  MoviesComponent},
  { path: 'movies/:id', component:  OneMovieComponent},
  { path: 'buy-ticket/:id', component:  BuyTicketComponent, canActivate: [AuthGuard] },
  { path: 'my-reservations', component: ReservationsComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

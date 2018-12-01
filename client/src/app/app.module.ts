import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatTableModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReservationsComponent } from './reservations/reservations.component';
import { ProjectionsComponent } from './projections/projections.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { OneMovieComponent } from './one-movie/one-movie.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { BuyTicketFormComponent } from './buy-ticket-form/buy-ticket-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ReservationsComponent,
    ProjectionsComponent,
    MoviesComponent,
    HomeComponent,
    OneMovieComponent,
    BuyTicketComponent,
    BuyTicketFormComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

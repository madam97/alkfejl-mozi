import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule, MatListModule, MatTableModule, MatSelectModule, MatFormFieldModule, MatCheckboxModule, MatInputModule  } from '@angular/material';
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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { NewProjectionComponent } from './new-projection/new-projection.component';
import { NewMovieFormComponent } from './new-movie-form/new-movie-form.component';
import { NewProjectionFormComponent } from './new-projection-form/new-projection-form.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  declarations: [
    NewProjectionComponent,
    NewProjectionFormComponent,
    NewMovieComponent,
    NewMovieFormComponent,
    AppComponent,
    NavbarComponent,
    ReservationsComponent,
    ProjectionsComponent,
    MoviesComponent,
    HomeComponent,
    OneMovieComponent,
    BuyTicketComponent,
    BuyTicketFormComponent,
    LoginPageComponent,
    TicketsComponent
  ],
  imports: [
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

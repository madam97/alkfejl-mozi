import { Injectable } from '@angular/core';
import { Reservation } from '../classes/reservation';
import { MovieService } from './movie.service';
import { UserService } from './user.service';
import { ProjectionService } from './projection.service';
import { User } from '../classes/user';
import { Projection } from '../classes/projection';
import { Room } from '../classes/room';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private _RESERVATIONS: Reservation[];

  constructor(
    private _movieService: MovieService,
    private _userService: UserService,
    private _projectionService: ProjectionService
  ) {
    this._RESERVATIONS = [
      {
        id: 1,
        user: {
          id: 2,
          name: "user",
          email: "user@gmail.com",
          pass: "$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C",
          age: 30,
          role: "ROLE_USER",
        } as User,
        projection: {
          id: 3,
          price: 2600,
          is3d: true,
          startingTime: new Date('2017-11-30T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room,
        } as Projection,
        row: 6,
        seat: 10,
      } as Reservation,
      {
        id: 1,
        user: {
          id: 2,
          name: "user",
          email: "user@gmail.com",
          pass: "$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C",
          age: 30,
          role: "ROLE_USER",
        } as User,
        projection: {
          id: 3,
          price: 2600,
          is3d: true,
          startingTime: new Date('2017-11-30T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room,
        } as Projection,
        row: 6,
        seat: 10,
      } as Reservation,
      {
        id: 1,
        user: {
          id: 3,
          name: "user2",
          email: "user2@mgmail.com",
          pass: "$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C",
          age: 12,
          role: "ROLE_USER",
        } as User,
        projection: {
          id: 3,
          price: 2600,
          is3d: true,
          startingTime: new Date('2017-11-30T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room,
        } as Projection,
        row: 6,
        seat: 10,
      } as Reservation,
    ];
   }

   public getReservations(): Reservation[] {
     return this._RESERVATIONS;
   }

   public addReservation(reservation: Reservation): void {
     this._RESERVATIONS.push(reservation);
}
}

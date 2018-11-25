import { Component, OnInit } from '@angular/core';
import { Reservation } from '../classes/reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  private _reservations: Reservation[];
  private displayedColumns = ['title', 'date', 'seat', 'row'];

  constructor(private _reservationService: ReservationService) { }

  ngOnInit() {
    this._reservations = this._reservationService.getReservations();
  }

}

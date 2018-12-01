import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Ticket } from '../classes/ticket';
import { TicketService } from '../services/ticket.service';
=======
import { Reservation } from '../classes/reservation';
import { ReservationService } from '../services/reservation.service';
>>>>>>> fcb68fab39212a02c1e92a01d06113b26fc39f15

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

<<<<<<< HEAD
  private _reservations: Ticket[];
  private displayedColumns = ['title', 'date', 'seat', 'row'];

  constructor(private _reservationService: TicketService) { }

  ngOnInit() {
    //this._reservations = this._reservationService.getReservations();
=======
  private _reservations: Reservation[];
  private displayedColumns = ['title', 'date', 'seat', 'row'];

  constructor(private _reservationService: ReservationService) { }

  ngOnInit() {
    this._reservations = this._reservationService.getReservations();
>>>>>>> fcb68fab39212a02c1e92a01d06113b26fc39f15
  }

}

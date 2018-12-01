import { Component, OnInit } from '@angular/core';
import { Ticket } from '../classes/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  private _reservations: Ticket[];
  private displayedColumns = ['title', 'date', 'seat', 'row'];

  constructor(private _reservationService: TicketService) { }

  ngOnInit() {
    //this._reservations = this._reservationService.getReservations();
  }

}

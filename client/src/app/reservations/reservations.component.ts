import { Component, OnInit } from '@angular/core';
import { Ticket } from '../classes/ticket';
import { TicketService } from '../services/ticket.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  private tickets: Ticket[];
  private displayedColumns = ['title', 'date', 'seat', 'row'];

  constructor(private ticketService: TicketService, private authService: AuthService) { }

  async ngOnInit() {
    //this._tickets = this._ticketService.getTickets();
    this.tickets = await this.ticketService.getTicketsByUser(this.authService.user)
  }

}

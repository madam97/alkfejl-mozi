import { Component, OnInit } from '@angular/core';
import { Ticket } from '../classes/ticket';
import { TicketService } from '../services/ticket.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  private tickets: Ticket[];
  private displayedColumns = ['title', 'user', 'email', 'date', 'seat', 'row', 'delete'];

  constructor(private ticketService: TicketService, private authService: AuthService) { }

  async ngOnInit() {
    this.tickets = await this.ticketService.getTickets();
  }

  async deleteTicket(id: number){
    await this.ticketService.deleteTicket(id);
    this.tickets = await this.ticketService.getTickets();
  }
}

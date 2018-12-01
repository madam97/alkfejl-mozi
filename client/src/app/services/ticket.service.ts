import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Ticket } from '../classes/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private route = "tickets";

  constructor(
    private httpService: HttpService,
    private _ticketService: TicketService
  ) {}

  public getTickets(): Promise<Ticket[]> {
    return this.httpService.get<Ticket[]>(this.route);
  }

  public addTicket(ticket: Ticket): void {
    this.httpService.post<Ticket>(this.route, ticket);
  }

}

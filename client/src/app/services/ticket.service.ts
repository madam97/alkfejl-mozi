import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Ticket } from '../classes/ticket';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private route = "tickets";

  constructor(
    private httpService: HttpService,
    private _ticketService: TicketService,
    private authService: AuthService,
    private router: Router
  ) {}

  public getTickets(): Promise<Ticket[]> {
    return this.httpService.get<Ticket[]>(this.route);
  }

  public addTicket(ticket: Ticket): void {
    this.httpService.post<Ticket>(this.route, ticket);
  }

  public getTicketsByUser(user: User): Promise<Ticket[]> {
    return this.httpService.get<Ticket[]>(this.route + '/user/' + user.id)
}

}

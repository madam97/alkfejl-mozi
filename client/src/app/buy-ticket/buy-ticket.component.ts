import { Component, OnInit } from '@angular/core';
import { Projection } from '../classes/projection';
import { ActivatedRoute } from '@angular/router';
import { ProjectionService } from '../services/projection.service';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../classes/ticket';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
  private _projection: Projection;

  constructor(
    private route: ActivatedRoute,
    private projectionService: ProjectionService,
    private ticketService: TicketService
  ) { }

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this._projection = await this.projectionService.getProjection(id);
  }

  private onSave(tickets: Ticket[]){
    for (let ticket of tickets) {
      this.ticketService.addTicket(ticket);
    }
  }

}

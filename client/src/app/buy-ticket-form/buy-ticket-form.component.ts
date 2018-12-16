import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ticket } from '../classes/ticket';
import { Projection } from '../classes/projection';
import { ActivatedRoute } from '@angular/router';
import { ProjectionService } from '../services/projection.service';
import { TicketService } from '../services/ticket.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-buy-ticket-form',
  templateUrl: './buy-ticket-form.component.html',
  styleUrls: ['./buy-ticket-form.component.css']
})
export class BuyTicketFormComponent implements OnInit {
  @Input('projection') public projection: Projection;
  @Output('save') public save: EventEmitter<Ticket[]> = new EventEmitter<Ticket[]>(); 

  private _buyedTickets: Ticket[];
  private _tickets: Ticket[];

  private _room: Object[][];

  private ticketForm;

  constructor(
    private route: ActivatedRoute,
    private projectionService: ProjectionService,
    private ticketService: TicketService,

    private authService: AuthService,
    
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id'));
    this.projection = await this.projectionService.getProjection(id);
    this._buyedTickets = await this.ticketService.getTicketsByProjection(id);

    console.log('PROJETION:', this.projection);
    console.log('TICKETS:', this._buyedTickets);

    let fbGroup : Object = {};

    this._room = [];
    for (let i: number = 0; i < this.projection.room.rows; ++i) {
      this._room[i] = [];
      for (let j: number = 0; j < this.projection.room.seats; ++j) {
        let seatId : string = "r"+i+"s"+j;

        let reserved = false;
        let x : number = 0;
        while (x < this._buyedTickets.length && !reserved) {
          if (this._buyedTickets[x].row == i+1 && this._buyedTickets[x].seat == j+1) {
            reserved = true;
          }
          ++x;
        }

        
        this._room[i][j] = {'id' : seatId, 'disabled' : reserved};

        let data : Array<Object> = [{value: '', disabled: reserved}];

        fbGroup[seatId] = data; //r1s1 : ['', reserved]
      }
    }

    this.ticketForm = this.fb.group(fbGroup);
  }

  private onSubmit() {
    this._tickets = [];

    for (let i: number = 0; i < this.projection.room.rows; ++i) {
      for (let j: number = 0; j < this.projection.room.seats; ++j) {
        let seatId : string = "r"+i+"s"+j;
        
        if (this.ticketForm.get(seatId).value) {
          this._tickets.push({
            id: null,
            projection: this.projection,
            user: this.authService.user,
            row: i,
            seat: j
          } as Ticket);
        }
      }
    }

    if (this._tickets) {
      this.save.emit(this._tickets);
      
      console.log(this._tickets);
    }

  }

}

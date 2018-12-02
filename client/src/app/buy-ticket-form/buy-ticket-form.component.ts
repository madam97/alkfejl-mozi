import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ticket } from '../classes/ticket';
import { Projection } from '../classes/projection';

@Component({
  selector: 'app-buy-ticket-form',
  templateUrl: './buy-ticket-form.component.html',
  styleUrls: ['./buy-ticket-form.component.css']
})
export class BuyTicketFormComponent implements OnInit {
  @Input('projection') public projection: Projection;
  @Output('save') public save: EventEmitter<Ticket[]> = new EventEmitter<Ticket[]>(); 

  private _tickets: Ticket[];

  private _room: string[][];

  private ticketForm;

  constructor(
    private fb: FormBuilder
  ) {
    let fbGroup : Object;

    for (let i: number = 0; i < this.projection.room.rows; ++i) {
      for (let j: number = 0; j < this.projection.room.seats; ++j) {
        let seatId : string = "r"+i+"s"+j;
        this._room[i][j] = seatId;

        let reserved = false;
        let x : number = 0;
        while (x < this.projection.tickets.length && !reserved) {
          if (this.projection.tickets[x].row == i && this.projection.tickets[x].seat == j) {
            reserved = true;
          }
          ++x;
        }

        let data : Array<Object> = [{value: '', disabled: reserved}];

        fbGroup[seatId] = data; //r1s1 : ['', reserved]
      }
    }

    this.ticketForm = this.fb.group(fbGroup);
  }

  ngOnInit() {
    
  }

  private onSubmit() {
    for (let i: number = 0; i < this.projection.room.rows; ++i) {
      for (let j: number = 0; j < this.projection.room.seats; ++j) {
        let seatId : string = "r"+i+"s"+j;
        
        if (this.ticketForm.get(seatId).value) {
          this._tickets.push({
            id: null,
            projection: this.projection,
            //user: ,
            row: i,
            seat: j
          } as Ticket);
        }
      }
    }

    this.save.emit(this._tickets);

    console.log(this._tickets);
  }

}

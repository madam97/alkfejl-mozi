import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Projection } from '../classes/projection';
import { Movie } from '../classes/movie';
import { Room } from '../classes/room';
import { MovieService } from '../services/movie.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-new-projection-form',
  templateUrl: './new-projection-form.component.html',
  styleUrls: ['./new-projection-form.component.css']
})
export class NewProjectionFormComponent implements OnInit {
  @Input('projection') public projection: Projection;
  @Output('save') public save: EventEmitter<Projection> = new EventEmitter<Projection>(); 

  private _movies: Movie[];
  private _rooms: Room[];

  private _projection: Projection = {
    id: null,
    price: null,
    is3d: null,
    time: null,
    room: null,
    movie: null,
    tickets: null
  };

  private projectionForm = this.fb.group({
    price: [''],
    is3d: [''],
    time: [''],
    room: [''],
    movie: ['']
  });

  constructor(
    private roomService: RoomService,
    private movieService: MovieService,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    this._rooms = await this.roomService.getRooms();
    this._movies = await this.movieService.getMovies();
  }

  private async onSubmit() {
    this._projection.price = this.projectionForm.get('price').value;
    this._projection.is3d = this.projectionForm.get('is3d').value;
    this._projection.time = new Date( this.projectionForm.get('time').value );
    this._projection.room = await this.roomService.getRoom( this.projectionForm.get('room').value );
    this._projection.movie = await this.movieService.getMovie( this.projectionForm.get('movie').value );

    this.save.emit(this._projection);

    console.log(this._projection);
  }

}

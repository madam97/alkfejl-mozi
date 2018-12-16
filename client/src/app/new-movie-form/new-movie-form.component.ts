import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Movie } from '../classes/movie';
import { ActorService } from '../services/actor.service';
import { Actor } from '../classes/actor';

@Component({
  selector: 'app-new-movie-form',
  templateUrl: './new-movie-form.component.html',
  styleUrls: ['./new-movie-form.component.css']
})
export class NewMovieFormComponent implements OnInit {
  @Input('movie') public movie: Movie;
  @Output('save') public save: EventEmitter<Movie> = new EventEmitter<Movie>(); 

  private _actors: Actor[];

  private _movie: Movie = {
    id: null,
    title: null,
    agelimit: null,
    description: null,
    rate: null,
    length: null,

    projections: null,
    actors: null
  };

  private movieForm;

  constructor(
    private actorService: ActorService,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    this._actors = await this.actorService.getActors();

    let fbGroup : Object = {
      movieTitle: [''],
      agelimit: [''],
      description: [''],
      rate: [''],
      length: ['']
    };

    for (let actor of this._actors) {
      let actorId : string = "actor"+actor.id;
      fbGroup[actorId] = [{value: ''}];
    }

    this.movieForm = this.fb.group(fbGroup);
  }

  private onSubmit() {
    this._movie.title = this.movieForm.get('movieTitle').value;
    this._movie.agelimit = this.movieForm.get('agelimit').value;
    this._movie.description = this.movieForm.get('description').value;
    this._movie.rate = this.movieForm.get('rate').value;
    this._movie.length = this.movieForm.get('length').value;

    this._movie.actors = [];
    for (let actor of this._actors) {
      let actorId : string = "actor"+actor.id;
      if (this.movieForm.get(actorId).value) {
        for (let actor2 of this._actors) {
          if (actor.id == actor2.id) {
            this._movie.actors.push(actor);
          }
        }
      }
    }

    this.save.emit(this._movie);

    console.log(this._movie);
  }

}

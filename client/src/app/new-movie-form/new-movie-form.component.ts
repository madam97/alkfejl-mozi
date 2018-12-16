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

  private movieForm; /*= this.fb.group({
    title: [''],
    agelimit: [''],
    description: [''],
    rate: [''],
    length: [''],
    actors: ['']
  });*/

  constructor(
    private actorService: ActorService,
    private fb: FormBuilder
  ) {}

  async ngOnInit() {
    this._actors = await this.actorService.getActors();

    let fbGroup : Object = {
      title: [{value: ''}],
      agelimit: [{value: ''}],
      description: [{value: ''}],
      rate: [{value: ''}],
      length: [{value: ''}]
    };

    for (let i : number = 0; i < this._actors.length; ++i) {
      let actorId : string = "actor"+i;
      fbGroup[actorId] = [{value: ''}];
    }

    this.movieForm = this.fb.group(fbGroup);
  }

  private onSubmit() {
    this._movie.title = this.movieForm.get('title').value;
    this._movie.agelimit = this.movieForm.get('agelimit').value;
    this._movie.description = this.movieForm.get('description').value;
    this._movie.rate = this.movieForm.get('rate').value;
    this._movie.length = this.movieForm.get('length').value;

    this._movie.actors = [];
    for (let i : number = 0; i < this._actors.length; ++i) {
      let actorId : string = "actor"+i;
      if (this.movieForm.get(actorId).value) {
        for (let actor of this._actors) {
          if (actor.id == i) {
            this._movie.actors.push(actor);
          }
        }
      }
    }

    this.save.emit(this._movie);

    console.log(this._movie);
  }

}

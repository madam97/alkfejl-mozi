import { Injectable } from '@angular/core';
import { Movie } from '../classes/movie'; 
import { Projection } from '../classes/projection'; 
import { Actor } from '../classes/actor'; 
import { Room } from '../classes/room';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _MOVIES: Movie[] = [
    {id : 1, title : 'The Bucket List (2007)', description: 'Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.', 
      agelimit: 6, rate: 7.4, length: 97,
      projections: [
        {id: 1, price: 1300, is3d: false, startingTime: new Date('2018-12-12T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room
        } as Projection,
        {id: 2, price: 1300, is3d: false, startingTime: new Date('2018-12-13T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection,
        {id: 3, price: 1300, is3d: false, startingTime: new Date('2018-12-14T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection
      ],
      actors: [
        {id: 1, name: 'Jack Nickolson'} as Actor,
        {id: 2, name: 'Morgan Freeman'} as Actor
      ]
    } as Movie,
    {id : 2, title : 'The Bucket List (2007)', description: 'Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.', 
      agelimit: 12, rate: 7.4, length: 97,
      projections: [
        {id: 1, price: 1300, is3d: false, startingTime: new Date('2018-12-12T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room
        } as Projection,
        {id: 2, price: 1300, is3d: false, startingTime: new Date('2018-12-13T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection,
        {id: 3, price: 1300, is3d: false, startingTime: new Date('2018-12-14T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection
      ],
      actors: [
        {id: 1, name: 'Jack Nickolson'} as Actor,
        {id: 2, name: 'Morgan Freeman'} as Actor
      ]
    } as Movie,
    {id : 3, title : 'The Bucket List (2007)', description: 'Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.', 
      agelimit: 18, rate: 7.4, length: 97,
      projections: [
        {id: 1, price: 1300, is3d: false, startingTime: new Date('2018-12-12T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room
        } as Projection,
        {id: 2, price: 1300, is3d: false, startingTime: new Date('2018-12-13T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection,
        {id: 3, price: 1300, is3d: false, startingTime: new Date('2018-12-14T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection
      ],
      actors: [
        {id: 1, name: 'Jack Nickolson'} as Actor,
        {id: 2, name: 'Morgan Freeman'} as Actor
      ]
    } as Movie,
    {id : 4, title : 'The Bucket List (2007)', description: 'Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die.', 
      agelimit: 16, rate: 7.4, length: 97,
      projections: [
        {id: 1, price: 1300, is3d: false, startingTime: new Date('2018-12-12T13:30'),
          room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room
        } as Projection,
        {id: 2, price: 1300, is3d: false, startingTime: new Date('2018-12-13T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection,
        {id: 3, price: 1300, is3d: false, startingTime: new Date('2018-12-14T13:30'),
          room: {id: 2, name: 'Kis terem', rows: 10, seats: 20} as Room
        } as Projection
      ],
      actors: [
        {id: 1, name: 'Jack Nickolson'} as Actor,
        {id: 2, name: 'Morgan Freeman'} as Actor
      ]
    } as Movie,
  ];

  constructor() { }

  public getMovies() : Movie[] {
    return this._MOVIES;
  }

  public getLastMovies(limit: number) : Movie[] {
    return this._MOVIES.slice(0,limit);
  }

  public getMovie(id: number) : Movie {
    for (let movie of this._MOVIES) {
      if (movie.id == id) {
        return movie;
      }
    }
  }
}

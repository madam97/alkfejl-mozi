import { Injectable } from '@angular/core';
import { Projection } from '../classes/projection';
<<<<<<< HEAD
import { HttpService } from './http.service';
=======
import { Room } from '../classes/room';
>>>>>>> fcb68fab39212a02c1e92a01d06113b26fc39f15

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {
<<<<<<< HEAD
  private route: string = "movies";

  private _PROJECTIONS: Projection[] = [];

  constructor(
    private httpService: HttpService
  ) { }

  public getProjections() : Promise<Projection[]> {
    return this.httpService.get<Projection[]>(this.route);
  }

  public getProjection(id: number) : Promise<Projection> {
    return this.httpService.get<Projection>(this.route + "/" + id);
=======

  private _PROJECTIONS: Projection[] = [
    {
      id: 1,
      price: 1500,
      is3d: false,
      startingTime: new Date('2017-11-30T13:30'),
      room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room,
    } as Projection,
    {
      id: 2,
      price: 1500,
      is3d: false,
      startingTime: new Date('2017-11-30T13:30'),
      room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room,
    } as Projection,
    {
      id: 3,
      price: 2600,
      is3d: true,
      startingTime: new Date('2017-11-30T13:30'),
      room: {id: 1, name: 'Nagy terem', rows: 20, seats: 30} as Room,
    } as Projection,
  ];

  constructor() { }

  public getProjections() : Projection[] {
    return this._PROJECTIONS;
  }

  public getProjection(id: number) : Projection {
    for (let projection of this._PROJECTIONS) {
      if (projection.id == id) {
        return projection;
      }
    }
>>>>>>> fcb68fab39212a02c1e92a01d06113b26fc39f15
  }
}

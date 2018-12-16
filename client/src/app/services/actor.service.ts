import { Injectable } from '@angular/core';
import { Actor } from '../classes/actor'; 
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  private route: string = "actors";

  constructor(
    private httpService: HttpService
  ) { }

  public getActors() : Promise<Actor[]> {
    return this.httpService.get<Actor[]>(this.route);
  }

  public getActor(id: number) : Promise<Actor> {
    return this.httpService.get<Actor>(this.route + "/" + id);
  }

}

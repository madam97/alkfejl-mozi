import { Injectable } from '@angular/core';
import { Projection } from '../classes/projection';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {
  private route: string = "movies";

  constructor(
    private httpService: HttpService
  ) { }

  public getProjections() : Promise<Projection[]> {
    return this.httpService.get<Projection[]>(this.route);
  }

  public getProjection(id: number) : Promise<Projection> {
    return this.httpService.get<Projection>(this.route + "/" + id);
  }
}

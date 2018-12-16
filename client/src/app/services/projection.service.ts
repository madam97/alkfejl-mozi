import { Injectable } from '@angular/core';
import { Projection } from '../classes/projection';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {
  private route: string = "projections";

  constructor(
    private httpService: HttpService
  ) { }

  public getProjections() : Promise<Projection[]> {
    return this.httpService.get<Projection[]>(this.route);
  }

  public addProjection(projection: Projection): void {
    this.httpService.post<Projection>(this.route, projection);
  }

  public getProjection(id: number) : Promise<Projection> {
    return this.httpService.get<Projection>(this.route + "/" + id);
  }
}

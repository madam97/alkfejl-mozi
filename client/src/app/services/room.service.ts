import { Injectable } from '@angular/core';
import { Room } from '../classes/room'; 
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private route: string = "rooms";

  constructor(
    private httpService: HttpService
  ) { }

  public getRooms() : Promise<Room[]> {
    return this.httpService.get<Room[]>(this.route);
  }

  public getRoom(id: number) : Promise<Room> {
    return this.httpService.get<Room>(this.route + "/" + id);
  }

}

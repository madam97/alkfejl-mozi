import { Room } from "./room";

export class Projection {
    public id: number;
    public price: number;
    public is3d: boolean;
    public startingTime: Date;
    
    public room: Room;
}

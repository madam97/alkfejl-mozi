import { Room } from "./room";
import { Movie } from "./movie";
import { Ticket } from "./ticket";

export class Projection {
    public id: number;
    public price: number;
    public is3d: boolean;
    public time: Date;
    public room: Room;
    public movie: Movie;
    public tickets: Ticket[];
}

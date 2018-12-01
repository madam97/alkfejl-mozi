import { Room } from "./room";
import { Movie } from "./movie";
import { Ticket } from "./ticket";

export class Projection {
    public id: number;
    public price: number;
    public is3d: boolean;
<<<<<<< HEAD
    public time: Date;
=======
    public startingTime: Date;
>>>>>>> fcb68fab39212a02c1e92a01d06113b26fc39f15
    
    public room: Room;
    public movie: Movie;
    public tickets: Ticket[];
}

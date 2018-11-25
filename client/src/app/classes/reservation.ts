import { User } from "./user";
import { Projection } from "./projection";

export class Reservation {
    public id: number;
    public user: User;
    public projection: Projection;
    public row: number;
    public seat: number;
}

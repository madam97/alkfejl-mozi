import { User } from "./user";
import { Projection } from "./projection";

export class Ticket {
    public id: number;
    public user: User;
    public projection: Projection;
    public row: number;
    public seat: number;
}

import { Projection } from "./projection";

export class Room {
    public id: number;
    public name: string;
    public rows: number;
    public seats: number;
    public projections: Projection[];
}

import { Projection } from "./projection";
import { Actor } from "./actor";

export class Movie {
    public id: number;
    public title: string;
    public agelimit: number;
    public description: string;
    public rate: number;
    public length: number;

    public projections: Projection[];
    public actors: Actor[];
}

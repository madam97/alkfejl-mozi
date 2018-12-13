import { Ticket } from "./ticket";
import { Role } from "./role";

export class User {
    public id: number;
    public name: string;
    public email: string;
    public pass: string;
    public age: number;
    public role: Role;

    public tickets: Ticket[];
}

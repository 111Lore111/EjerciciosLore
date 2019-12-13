import { stringify } from 'querystring';

export class Alumno {
    id: number;
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

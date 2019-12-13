export class Calificacion {
    id: number;
    alumnoId: number;
    curso: string;
    nota1: number;
    nota2: number;
    nota3: number;
    promedio: number;

    constructor(alumnoId: number,
        curso: string,
        nota1: number,
        nota2: number,
        nota3: number,
        promedio: number){
            this.alumnoId = alumnoId;
            this.curso = curso;
            this.nota1 = nota1;
            this.nota2 = nota2;
            this.nota3 = nota3;
            this.promedio = promedio;
    }
}

import { InMemoryDbService } from 'angular-in-memory-web-api';

//en la clase inmemory implementara los datos en inmemorydb que se h inportado.
export class InMemoryDataService implements InMemoryDbService{
    //Metodo lo que hara es crear una db falsa para despues verla

    createDb(){//debera de retornar un objeto
        const user = [{
                id: 1,
                name: 'Jessica',
                lastname: 'Henriquez',
                username: 'Kako',
                pws: '1234',
                animalId: 1

            },
            {
                id: 2,
                name: 'Nelson',
                lastname: 'Zatoro',
                username: 'Mono',
                pws: '1234',
                animalId: 2
            },
            {
                id: 3,
                name: 'Elena',
                lastname: 'Echenagusia',
                username: 'Ema',
                pws: '1234',
                animalId: 3
            },
        ];

        const animal = [{
                 id: 1,
                 name: 'Mono',
                },
                {
                    id: 2,
                    name: 'Chancho',
        
                },
                {
                    id: 3,
                    name: 'Perro',
        
                },
       
         ];

         const alumno = [
             {
                 id: 1,
                 name: 'Elza payo',
             },
             {
                id: 2,
                name: 'Elvis Tek',
            },
            {
                id: 3,
                name: 'Luz Roja',
            }
        ];

        const calificacion = [
            {
                id: 1,
                alumnoId: 1,
                curso: 'Matematicas',
                nota1: 30,
                nota2: 20,
                nota3: 10,
                promedio: 20
            },
            {
                id: 2,
                alumnoId: 2,
                curso: 'Lenguaje',
                nota1: 50,
                nota2: 20,
                nota3: 40,
                promedio: 37
            },
            {
                id: 3,
                alumnoId: 3,
                curso: 'Historia',
                nota1: 50,
                nota2: 50,
                nota3: 40,
                promedio: 47
            },
        ]
        return {user, 
            animal, 
            alumno, 
            calificacion};
    }
}

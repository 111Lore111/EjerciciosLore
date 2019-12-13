export class User {
    id: number;
    name: string;
    lastname: string;
    username: string;
    pws: string;
    animalId: number;

    constructor(
      name?: string,//atributos opcionales ? 
      lastname?: string,
      username?: string,
      pws?: string,
      animalId?: number
    ) {
      this.name = name;
      this.lastname = lastname;
      this.username = username;
      this.pws = pws;
      this.animalId = animalId;
     }
}

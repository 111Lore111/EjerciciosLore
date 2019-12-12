import { Component } from '@angular/core';

/*Decoradores y es propio de typeScript, esto agrega 
funcionalidades a la clase de forma externa*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ahorcado';

  /*Propiedad de la clase */
  palabra = 'CHANCHO';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;

  letras = ['A','B','C','D','E','F','G','H','I','J','K',
            'L','M','N','Ñ','O','P','Q','R','S','T','U',
            'V','W','X','Y','Z'];

  /* función que se ejecuta cuando se crea una nueva
  instancia de mi clase*/
  constructor(){

    /*el repeat, repetira el caracter '_' por cada letra que
    tenga esa letra*/
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  comprobar( letra ){


    this.existeLetra(letra);

    /*Se crean las variables */
    // console.log('letra: '+letra);

    //transforma las palabrasOcultas en un arreglo
    /*el split ayuda a separar la palabra y convertir un arreglo,
    esto lo cortara en un espacio en blanco
    */
    const palabraOcultaArr = this.palabraOculta.split( ' ' );
    
    for(let i = 0; i < this.palabra.length; i++){

        /*Se evaluará si la letra ingresada exsiste, si existe se 
        reemplazará el valor de la palabra en el arreglo */
      if(this.palabra[i] === letra){

          palabraOcultaArr[i] = letra;
      }
    }

    /*Se juntarán las paralabrasOcultasArr y los unira con Join
    con un espacio */
    this.palabraOculta = palabraOcultaArr.join( ' ' );
    this.verificarGame();
  }

  verificarGame(){

    const palabraArr = this.palabraOculta.split( ' ' );
    const palabraEvaluar = palabraArr.join('');

    if(palabraEvaluar === this.palabra){
      this.gano = true;
      console.log('Usuario ha ganado');
    }

    if(this.intentos >=9){
      this.perdio = true;
      console.log('Usuario ha perdido');
    }
    
  }

  existeLetra( letra ){
    /*El indexOf retornará la posición de la letra que encuentre.
    si no la encuentra regresaria un -1,  si encuentra una letra
    regresaria a la posición indice;
    */
    if(this.palabra.indexOf( letra ) >= 0){
      console.log('Letra existe '+letra);
    }else{
      console.log('Letra no existe '+letra);
      this.intentos ++;
    }
  }
}

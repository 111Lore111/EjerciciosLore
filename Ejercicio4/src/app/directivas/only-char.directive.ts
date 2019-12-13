import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyChar]'
})
export class OnlyCharDirective {
  private regex: RegExp = new RegExp(/^[a-zA-Z-ñÑ-úáéíó]+$/g);
  
  constructor(
    //elementref es reiterizar un elemento nativo
    private el: ElementRef
  ) {}
  //caputa el elemento ingresdo en el teclado
  //recibira el elemento y llegara dentro del arreglo, despues se ejecutara el elemento
    @HostListener('keydown',['$event']) onKeyDown(event: KeyboardEvent){

      if(event.keyCode === 86 && (event.ctrlKey || event.metaKey)){
        return;
      }
      const current: string = this.el.nativeElement.value;
      //cargo la variable next y la concadeno con onkeydown
      const next: string = current.concat(event.key);
      //conbertira todo en string.
      if(next && !String(next).match(this.regex)){
        //si es un numero restringira y va a previene el elemento
        event.preventDefault();
      }
    }
}

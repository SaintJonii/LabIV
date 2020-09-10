import { Component, OnInit } from '@angular/core';
import { Persona } from '../../clases/persona';

interface IPersona {
  nombre: string;
  apellido: string;
}

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  titulo = 'Listado de Personas';
  colspan = '2';
  src = 'https://i.pinimg.com/564x/d9/a4/4a/d9a44a6026f94b0456f90e77e636b4e4.jpg';
  nombre = 'Pepe';
  caso: number = 1;
  persona: IPersona = {
    nombre: "",
    apellido: ""
  };

  mostrarCondicional = false;
  listaNombres = [];

  constructor() {
    this.persona.nombre = 'Juan';
    this.persona.apellido = 'Perez';
    //this.listaNombres = [this.persona];
    //this.listaNombres.push(new Persona('Lionel', 'Messi', 33));
  }

  ngOnInit(): void {
  }

  manejadora(event) {
    console.log(event);
    console.log(this.persona);
    this.mostrarCondicional = !this.mostrarCondicional;
    this.listaNombres.push(this.persona);
  }

  onCargar(persona) {
    console.log(persona);
    this.listaNombres.push(persona);
  }

  nav(e) {
    console.log(e);
    this.caso = e;
  }

}


/*-------------- One-way Binding ---------------------------------------------------------
  Interpolacion: es el uso de las llaves {{}} para pasar parametros desde el TS al html

** Propiedades [] o bind target para One-Way || ngClass o ngStyle
  Otra forma de hacer binding, pasando valores a un elemento
  Otra forma es usar bind- (bind-src por ejemplo)

** Desde el html al Ts
  Para leer un datos del html desde el ts, utilizamos eventos evento:(click)

**-------------- Two-way Binding ---------------------------------------------------------
** banana box: [()], [(ngModel)]

**-------------- Directivas --------------------------------------------------------------
  *ngIf -> tambien se puede usar un else.
  *ngSwitch -> *ngSwitchCase
  *ngFor

 */
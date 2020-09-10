import { Component, OnInit, Output } from '@angular/core';
import { Persona } from '../../clases/persona';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cargar-persona',
  templateUrl: './cargar-persona.component.html',
  styleUrls: ['./cargar-persona.component.css']
})
export class CargarPersonaComponent implements OnInit {
  @Output() onCargar = new EventEmitter<Persona>();
  nombre;
  apellido;
  edad;

  constructor() {
  }

  ngOnInit(): void {
    //console.log(this.onCargar)
  }

  cargar(e) {
    const persona = new Persona(this.nombre, this.apellido, this.edad);
    console.log(persona);
    this.onCargar.emit(persona);
  }

}

/* @Output()
  Para que un componente envie atributos a otro componente, se declaran Outputs.


*/

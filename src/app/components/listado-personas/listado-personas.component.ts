import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  @Input() listaNombres: Persona[];
  @Input() titulo: string;

  //listaNombres: Persona[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listaNombres);
  }

}


/* @Input()
  Para que un componente reciba atributos de otro componente, se declaran Inputs.


*/
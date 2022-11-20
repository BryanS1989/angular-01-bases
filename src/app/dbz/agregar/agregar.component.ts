import { Component, Input } from '@angular/core';

import { Personaje } from "../interfaces/dbz.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('listaPersonajes') personajes : Personaje[] = [];
  @Input() nuevoPersonaje : Personaje = {
    nombre : '',
    poder : 0
  }

  agregar() {
    console.log('[DbzModule] [AgregarComponent] [agregar()]', this.nuevoPersonaje);

    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    this.personajes.push({...this.nuevoPersonaje});

    this.defaultValues();
  }

  defaultValues () {
    this.nuevoPersonaje.nombre = '';
    this.nuevoPersonaje.poder = 0;
  }

}

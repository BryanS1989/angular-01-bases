import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from "../interfaces/dbz.interface";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevoPersonaje : Personaje = {
    nombre : '',
    poder : 0
  }

  @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  emitNuevoPersonaje() {
    console.log('[DbzModule] [AgregarComponent] [emitNuevoPersonaje()]', this.nuevoPersonaje);

    if (this.nuevoPersonaje.nombre.trim().length === 0) {
      return;
    }

    this.onNuevoPersonaje.emit( this.nuevoPersonaje );

    this.defaultValues();
  }

  defaultValues () {
    this.nuevoPersonaje.nombre = '';
    this.nuevoPersonaje.poder = 0;
  }

}
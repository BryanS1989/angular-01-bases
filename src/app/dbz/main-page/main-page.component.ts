import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  personajes      : Personaje[] = [
    {
      nombre : 'Goku',
      poder : 15000
    },
    {
      nombre : 'Vegeta',
      poder : 7500
    }
  ];

  nuevoPersonaje  : Personaje   = {
    nombre : '',
    poder : 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    console.log('[DbzModule] [MainPageComponent] [agregar()]', this.nuevoPersonaje);

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

  // cambiarNombre(event : any) {
  //   console.log('[DbzModule] [MainPageComponent] [cambiarNombre()]', event.target.value);
  // }

}

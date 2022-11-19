import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre : string;
  poder : number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  nuevoPersonaje : Personaje = {
    nombre : 'Trunks',
    poder : 14000
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    console.log('[DbzModule] [MainPageComponent] [agregar()]', this.nuevoPersonaje);
  }

  cambiarNombre(event : any) {
    console.log('[DbzModule] [MainPageComponent] [cambiarNombre()]', event.target.value);
  }

}

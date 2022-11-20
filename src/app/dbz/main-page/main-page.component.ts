import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevoPersonaje  : Personaje   = {
    nombre : 'Mutenroshi',
    poder : 1000
  }

  // Inyectamos el servicio en el MainPageComponent
  constructor(  ) {
    console.log('[DbzModule] [MainPageComponent] [constructor()]');
  }
}

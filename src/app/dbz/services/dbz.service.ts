import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000,
        },
        {
            nombre: 'Vegeta',
            poder: 7500,
        },
    ];

    /*
     * Getters & Setters
     */

    /**
     * Get the characters list
     * @return Personaje[]
     */
    get personajes(): Personaje[] {
        // Con el operador spread (...) rompemos la referencia ya que en JS
        // todos los objetos son enviados como referencia y no como valor
        return [...this._personajes];
    }

    /*
     * Constructor
     */

    constructor() {
        console.log(
            '[DbzModule] [DbzService] [constructor()] Servicio Iniciado!!!'
        );
    }

    /*
     * Methods
     */
    /**
     * Add a new character to characters list
     * @param personaje
     */
    agregarPersonaje(personaje: Personaje) {
        console.log(
            '[DbzModule] [DbzService] [agregarPersonaje()] Personaje a añadir: ',
            personaje
        );
        this._personajes.push({ ...personaje });
    }
}

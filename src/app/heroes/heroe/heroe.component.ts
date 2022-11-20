import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent {
    public nombre: string = 'Iron Man';
    public edad: number = 45;

    /*
     * GETTERS $ SETTERS
     * =================
     */

    /**
     * Retorna el nombre de un heroe capitalizado
     */
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    /*
     * FUNCIONES
     * =========
     */

    /**
     * Retorna Nombre y edad concatenado
     * @returns string
     */
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
        // return this.nombre + ' - ' + this.edad.toString();
    }

    cambiarNombre(): void {
        console.log('cambiarNombre()');
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        console.log('cambiarEdad()');
        this.edad = 30;
    }
}

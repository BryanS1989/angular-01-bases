import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Componentes que componen el módulo
    declarations: [HeroeComponent, ListadoComponent],

    // Cosas públicas/visibles para fuera del módulo
    exports: [HeroeComponent, ListadoComponent],

    // Módulos que se importarán
    imports: [
        CommonModule, // Ofrece directivas como el ngIf o ngFor
    ],
})
export class HeroesModule {}

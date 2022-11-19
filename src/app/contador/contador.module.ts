import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
  // Componentes que componen el módulo
  declarations : [
    ContadorComponent
  ],

  // Componentes que haremos visibles fuera del módulo
  exports : [
    ContadorComponent
  ]
})
export class ContadorModule {

}

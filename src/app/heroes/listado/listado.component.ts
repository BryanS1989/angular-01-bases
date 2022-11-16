import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent /*implements OnInit*/ {
  /*
  constructor() {
    console.log("[app-listado] Constructor()");
  }

  ngOnInit(): void {
    console.log("[app-listado] ngOnInit()");
  }
  */

  public  heroes        : string[]  = [
    'Spiderman', 'Ironman', 'Hulk',
    'Thor', 'Capitán América'
  ];
  public  deletedHeroe  : string    = '';

  borrarHeroe () {
    console.log("[app-listado] borrarHeroe()");

    this.deletedHeroe = this.heroes.pop() || '';

    console.log("[app-listado]    Héroe borrado: " + this.deletedHeroe);
  }

}

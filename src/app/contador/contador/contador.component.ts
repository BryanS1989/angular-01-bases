import { Component } from "@angular/core";

@Component ({
  selector : 'app-contador',
  template : `
    <h1> {{ title }} </h1>

    <p>
      La base es: <b> {{ base }} </b>
    </p>

    <button (click)="acumular( -base )">
      <span>
        - {{ base }}
      </span>
    </button>

    <span> {{ numero }} </span>

    <button (click)="acumular( base )">
      <span>
        + {{ base }}
      </span>
    </button>
  `
})
export class ContadorComponent {

  public  title   : string  = 'Contador App';
  public  numero  : number  = 10;
  public  base    : number  = 5;


  sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }

  acumular ( valor : number ) {
    this.numero += valor;
  }

}

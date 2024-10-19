import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrl: './exercicio02.component.scss',
})
export class Exercicio02Component {
  numero1!: number;
  numero2!: number;
  resultado!: number;

  somar(): number {

    this.resultado = this.numero1 + this.numero2
    return this.resultado;
  }
  subtrair(): number {

    this.resultado = this.numero1 - this.numero2
    return this.resultado;
  }
  multiplicar(): number {

    this.resultado = this.numero1 * this.numero2
    return this.resultado;
  }
  dividir(): number {

    this.resultado = this.numero1 / this.numero2
    return this.resultado;
  }
}

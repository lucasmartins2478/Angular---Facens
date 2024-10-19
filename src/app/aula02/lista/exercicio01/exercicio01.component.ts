import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrl: './exercicio01.component.scss',
})
export class Exercicio01Component {
  ac1!: number ;
  ac2!: number;
  ag!: number;
  af!: number;

  classeAlerta =''

  text = ''

  exibirAlerta: boolean = false

  calcularMedia(): number {
    const nota =
      this.ac1 * 0.15 + this.ac2 * 0.3 + this.ag * 0.1 + this.af * 0.45;


      if(nota > 7){
        this.text = `Sua média é ${nota}`
        this.classeAlerta = 'alert alert-success'
        this.exibirAlerta = true
      }
      else{
        this.text = `Sua média é ${nota}`
        this.classeAlerta = 'alert alert-warning'
        this.exibirAlerta = true
      }

    return nota;
  }
}

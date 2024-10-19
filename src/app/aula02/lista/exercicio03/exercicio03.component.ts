import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrl: './exercicio03.component.scss',
})
export class Exercicio03Component {
  nome!: string;
  email!: string;
  celular!: number;
  ra!: number;

  classeAlerta = '';

  text = '';

  exibirAlerta: boolean = false;

  cadastrarAluno(): void{

    if (this.nome != undefined && this.email != undefined && this.celular != undefined && this.ra != undefined) {
      this.text = "Aluno cadastrado com sucesso";
      this.classeAlerta = 'alert alert-success';
      this.exibirAlerta = true;
    } else {
      this.text = "Erro ao cadastrar aluno, verifique os campos";
      this.classeAlerta = 'alert alert-warning';
      this.exibirAlerta = true;
    }
  }
}

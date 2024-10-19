import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio04',
  templateUrl: './exercicio04.component.html',
  styleUrl: './exercicio04.component.scss',
})
export class Exercicio04Component {
  nome!: string;
  sexo!: string;
  idade!: number;
  valorAutomovel!: number;
  valorApolice!: number;

  classeAlerta = '';

  text = '';

  exibirAlerta: boolean = false;

  calcularApolice(): void {
    if (
      this.nome != undefined &&
      this.sexo != undefined &&
      this.idade != undefined &&
      this.valorAutomovel != undefined
    ) {
      if (this.sexo == 'Masculino' && this.idade <= 25) {
        this.valorApolice = (this.valorAutomovel / 100) * 15;
        this.text = `O valor da apolice é R$${this.valorApolice}`;
        this.classeAlerta = 'alert alert-secondary';
        this.exibirAlerta = true;
      }else if(this.sexo == "Masculino" && this.idade > 25){
        this.valorApolice = (this.valorAutomovel / 100) * 10;
        this.text = `O valor da apolice é R$${this.valorApolice}`;
        this.classeAlerta = 'alert alert-secondary';
        this.exibirAlerta = true;
      }
      else if(this.sexo == "Feminino"){
        this.valorApolice = (this.valorAutomovel / 100) * 8;
        this.text = `O valor da apolice é R$${this.valorApolice}`;
        this.classeAlerta = 'alert alert-secondary';
        this.exibirAlerta = true;
      }


    } else {
      this.text = 'Erro ao calcular apolice, verifique os campos';
      this.classeAlerta = 'alert alert-warning';
      this.exibirAlerta = true;
    }
  }
}

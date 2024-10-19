import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Aula02RoutingModule } from './aula02-routing.module';
import { OutroComponenteComponent } from './outro-componente/outro-componente.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { InterpolacaoComponent } from './interpolacao/interpolacao.component';
import { AulaPropertyBindingComponent } from './aula-property-binding/aula-property-binding.component';
import { AulaAtributeBindingComponent } from './aula-atribute-binding/aula-atribute-binding.component';
import { AulaEventBindingComponent } from './aula-event-binding/aula-event-binding.component';
import { Exercicio01Component } from './lista/exercicio01/exercicio01.component';
import { Exercicio02Component } from './lista/exercicio02/exercicio02.component';
import { Exercicio03Component } from './lista/exercicio03/exercicio03.component';
import { Exercicio04Component } from './lista/exercicio04/exercicio04.component';
import { NavbarComponent } from './lista/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OutroComponenteComponent,
    TwoWayComponent,
    InterpolacaoComponent,
    AulaPropertyBindingComponent,
    AulaAtributeBindingComponent,
    AulaEventBindingComponent,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component,
    Exercicio04Component,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    Aula02RoutingModule,
    FormsModule
  ]
})
export class Aula02Module { }

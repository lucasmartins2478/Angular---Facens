import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Aula01/components/login/login.component';
import { PrincipalComponent } from './Aula01/components/principal/principal.component';
import { PrimeiroComponenteComponent } from './Aula01/primeiro-componente/primeiro-componente.component';
import { PaiComponent } from './Aula01/pai/pai.component';
import { Filho1Component } from './Aula01/pai/filho1/filho1.component';
import { Filho2Component } from './Aula01/pai/filho2/filho2.component';
import { InterpolacaoComponent } from './aula02/interpolacao/interpolacao.component';
import { AulaPropertyBindingComponent } from './aula02/aula-property-binding/aula-property-binding.component';
import { AulaEventBindingComponent } from './aula02/aula-event-binding/aula-event-binding.component';
import { AulaAtributeBindingComponent } from './aula02/aula-atribute-binding/aula-atribute-binding.component';
import { TwoWayComponent } from './aula02/two-way/two-way.component';
import { Exercicio01Component } from './aula02/lista/exercicio01/exercicio01.component';
import { Exercicio02Component } from './aula02/lista/exercicio02/exercicio02.component';
import { Exercicio03Component } from './aula02/lista/exercicio03/exercicio03.component';
import { Exercicio04Component } from './aula02/lista/exercicio04/exercicio04.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'primeiro', component: PrimeiroComponenteComponent },
  {
    path: 'pai',
    component: PaiComponent,
    children: [
      { path: 'filho1', component: Filho1Component },
      { path: 'filho2', component: Filho2Component },
    ],
  },
  {
    path: 'aula02',
    loadChildren: () =>
      import('./aula02/aula02.module').then((m) => m.Aula02Module),
  },
  { path: 'interpolacao', component: InterpolacaoComponent },
  { path: 'propriedade', component: AulaPropertyBindingComponent },
  { path: 'evento', component: AulaEventBindingComponent },
  { path: 'atributo', component: AulaAtributeBindingComponent },
  { path: 'two', component: TwoWayComponent },
  { path: 'exercicio1', component: Exercicio01Component },
  { path: 'exercicio2', component: Exercicio02Component },
  { path: 'exercicio3', component: Exercicio03Component },
  { path: 'exercicio4', component: Exercicio04Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

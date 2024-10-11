import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Aula01/components/login/login.component';
import { PrincipalComponent } from './Aula01/components/principal/principal.component';

const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "principal", component: PrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

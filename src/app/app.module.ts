import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Aula01/components/login/login.component';
import { PrincipalComponent } from './Aula01/components/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaiComponent } from './Aula01/pai/pai.component';
import { PrimeiroComponenteComponent } from './Aula01/primeiro-componente/primeiro-componente.component';
import { MenuSuperiorComponent } from './Aula01/menu-superior/menu-superior.component';
import { RodapeComponent } from './Aula01/rodape/rodape.component';
import { Filho1Component } from './Aula01/pai/filho1/filho1.component';
import { Filho2Component } from './Aula01/pai/filho2/filho2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    PaiComponent,
    PrimeiroComponenteComponent,
    MenuSuperiorComponent,
    RodapeComponent,
    Filho1Component,
    Filho2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

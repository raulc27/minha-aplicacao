import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { HomeComponent } from './area-logada/home/home.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { Erro404Component } from './erro404/erro404.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ExercicioDataBindingComponent } from './shared/components/exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './shared/components/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/components/exercicio-pipes/exercicio-pipes.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

registerLocaleData(localePT,'pt')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    LoginComponent,
    PlanosContaComponent,
    CadastroComponent,
    LancamentosComponent,
    NaoEncontradoComponent,
    Erro404Component,
    AreaLogadaComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt'
  }, {
    provide: DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {FooterComponent} from './footer/footer.component';
import { ExercicioDataBindingComponent } from './exercicio-data-binding/exercicio-data-binding.component';
import { ExercicioDiretivasComponent } from './exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './exercicio-pipes/exercicio-pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

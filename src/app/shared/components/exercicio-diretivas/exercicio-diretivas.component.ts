import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exercicio-diretivas-constantes';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})

export class ExercicioDiretivasComponent {


MEMES_AGRUPADOS_POR_CATEGORIA=MEMES_AGRUPADOS_POR_CATEGORIA;
IMAGEM_PREFIXO="https://raw.githubusercontent.com/vitorfgsantos/angular-memes-diretivas/master/images/";

  deveExibir=true;
  
  frutas=[
    'Abacaxi',
    'Laranja',
    'Melancia',
  ]

trocarValor(){
  this.deveExibir=!this.deveExibir;
}


classeCSS='verde';

trocarParaVermelho(){
  this.classeCSS='vermelho';
}

trocarParaVerde(){
  this.classeCSS='verde';
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {

  deveExibir=true;
  constructor() { }

  ngOnInit(): void {
  }

trocarValor(){
  this.deveExibir=!this.deveExibir;
}


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Output() enviarInformacao = new EventEmitter();

  imageURL="https://images.freeimages.com/images/large-previews/3d5/green-frog-1400084.jpg";
  tamanho="100px";


  
  botaoHabilitado = true;

  constructor() {
    // setInterval(() => {
    //   this.enviarInformacao.emit();
    // }, 1000)
  }

  ngOnInit(): void {
  }

  getTextoAcessivel() {
    let valor = 10;
    const texto = '20';
    const lala = valor+ texto;

    return 'Um texto acessível...' + this.imageURL;
  }

  clicouNoBotao(event: MouseEvent) {
    console.log('Clicou no botão!', event);
    this.enviarInformacao.emit();
  }

  passouMousePorCima(event: any) {
    console.log('Passou o mouse', event.value);
  }


  
}

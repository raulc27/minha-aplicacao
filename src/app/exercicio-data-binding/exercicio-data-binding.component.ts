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


  constructor() { }

  ngOnInit(): void {
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seja bem-vindo';

  eventoRecebido(){
    console.log('recebi evento no app.component');
  }
}



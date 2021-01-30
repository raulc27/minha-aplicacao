import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }


  @ViewChild('usuarioInput')  usuarioInput:ElementRef|undefined;



  ngOnInit(): void {
  }

  usuario:string="";
  senha:string="";

  onSubmit(form:NgForm){


    if(!form.valid){
      form.controls.usuario.markAsTouched();
      form.constrols.senha.markAsTouched();
    }

    if(form.controls.usuario.invalid){
      this.usuarioInput?.nativeElement.focus();
    }

    return;

    this.login();

    console.log(this.usuario);
    console.log(this.senha)
  }


  login(){
    
  }



}

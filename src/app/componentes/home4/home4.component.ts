import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component {
  constructor() { }  
  Nombre:any
  Email:any
  contrase:any
  confirma:any
  phone:any
  ngOnInit() {
    this.recupera()
  }

  recupera(){
    this.Nombre= localStorage.getItem('Nombre')
    this.Email= localStorage.getItem('Email')
    this.contrase= localStorage.getItem('contrasena')
    this.confirma= localStorage.getItem('confirma' )
    this.phone= localStorage.getItem('phone')
}

}
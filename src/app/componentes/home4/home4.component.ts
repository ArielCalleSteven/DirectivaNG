import { Component } from '@angular/core';

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component {
  constructor() { }  
  Nombre:any
  Email:any
  contraseña:any
  confirma:any
  phone:any
  ngOnInit() {
    this.recupera()
  }

  recupera(){
    this.Nombre= localStorage.getItem('Nombre')
    this.Email= localStorage.getItem('Email')
    this.contraseña= localStorage.getItem('contraseña')
    this.confirma= localStorage.getItem('confirma' )
    this.phone= localStorage.getItem('phone')
}

}
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  Name: Text
  Email: Text
  contraseña: Text
  confirma: Text
  phone: Text

  
  
  constructor() { }

  ngOnInit(): void {
    localStorage.clear();
  }
  
  almacena(){
    localStorage.setItem('Nombre', this.Name.toString())
    localStorage.setItem('correo', this.Email.toString())
    localStorage.setItem('contraseña', this.contraseña.toString())
    localStorage.setItem('confir', this.confirma.toString())
    localStorage.setItem('telefono', this.phone.toString())

  }

}

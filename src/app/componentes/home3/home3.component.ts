import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  constructor(private pra: Router) { }
  Name: Text
  Email: Text
  contrasena: Text
  confirma: Text
  phone: Text
  ngOnInit(): void {
    localStorage.clear();
  }
  
  almacena(){
    localStorage.setItem('Nombre', this.Name.toString())
    localStorage.setItem('correo', this.Email.toString())
    localStorage.setItem('contrasena', this.contrasena.toString())
    localStorage.setItem('confir', this.confirma.toString())
    localStorage.setItem('telefono', this.phone.toString())

  }

  navega()
{
  this.pra.navigate(["pagina4"])
}

}

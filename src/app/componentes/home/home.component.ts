import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pre: Router) { }
  numero:any;
  suma:any;
  sueldos=[1700,1600,1900,2000,2100];
  ngOnInit(): void {
     this.numero=3;
     this.suma=0;
     this.almacenar()
  }

  almacenar ()
  {
    localStorage.setItem('valor_total',this.numero)
    localStorage.setItem('mensaje','almacenado')
  }
   

  navega3()
  {
    this.pre.navigate(["pagina2"])
  }
}

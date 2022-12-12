import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  constructor() { }

  resultado:any
  mensaje:any
  ngOnInit(): void {
    this.recuperar()
  }

  recuperar()
  {
    this.resultado=localStorage.getItem('valor_total');
    this.mensaje=localStorage.getItem('mensaje')
  }
}

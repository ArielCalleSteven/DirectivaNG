import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  numero:any=0;
  sueldos=[1700,1600,1900,2000,2100];
  ngOnInit(): void {
     
  }

  metodo1 ()
  {

  }
}

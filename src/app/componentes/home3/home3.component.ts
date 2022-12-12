import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor() { }
  nombre:any;
  email:any
  pass:any
  conf:any
  pho;any
  ngOnInit(): void {
    this.datos()
  }

  datos()
  {
    this.nombre=localStorage.getItem('Nombre');
    this.email=localStorage.getItem('Email');
    this.pass=localStorage.getItem('password');
    this.conf=localStorage.getItem('Confirm_Password');
    this.pho=localStorage.getItem('Phone_number');
  }

}

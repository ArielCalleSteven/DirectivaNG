import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { Home2Component } from './componentes/home2/home2.component';
import { Home3Component } from './componentes/home3/home3.component';
import { Home4Component } from './componentes/home4/home4.component';


const routes: Routes = [
  {
    path:'', component: HomeComponent 
  },
  {
    path:'pagina2', component: Home2Component 
  },
  {
    path:'pagina3', component: Home3Component
  },
  {
    path:'pagina4', component: Home4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }









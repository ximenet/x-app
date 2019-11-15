import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cont1Component } from './components/cont1/cont1.component';
import { Cont2Component } from './components/cont2/cont2.component';


const routes: Routes = [
  {path: 'cont1', component: Cont1Component},
  {path: 'cont2' , component: Cont2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

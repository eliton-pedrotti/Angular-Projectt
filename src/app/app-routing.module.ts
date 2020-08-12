import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaOnibusComponent} from './views/home/lista-onibus/lista-onibus.component';
import { ListaLotacaoComponent } from './views/home/lista-lotacao/lista-lotacao.component';
import {ListaItinerarioComponent} from './views/home/lista-itinerario/lista-itinerario.component';
import {ListaItinerarioLotacaoComponent} from './views/home/lista-itinerario-lotacao/lista-itinerario-lotacao.component'


//Rotas
const routes: Routes = [
  { path: '', redirectTo: '/lista-onibus', pathMatch: 'full'},
  { path: 'lista-onibus', component:ListaOnibusComponent},
  { path: 'lista-lotacao', component:ListaLotacaoComponent},
  { path: 'lista-itinerario/:id', component:ListaItinerarioComponent},
  { path: 'lista-itinerario-lotacao/:id', component:ListaItinerarioLotacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

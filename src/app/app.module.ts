
//Importação de todas as dependências

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaOnibusComponent } from './views/home/lista-onibus/lista-onibus.component';
import {MatTableModule} from '@angular/material/table';
import { ListaLotacaoComponent } from './views/home/lista-lotacao/lista-lotacao.component';
import {OnibusService} from './onibus.service';
import {HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { ListaItinerarioComponent } from './views/home/lista-itinerario/lista-itinerario.component';
import { ListaItinerarioLotacaoComponent } from './views/home/lista-itinerario-lotacao/lista-itinerario-lotacao.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaOnibusComponent,
    ListaLotacaoComponent,
    ListaItinerarioComponent,
    ListaItinerarioLotacaoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    DataTablesModule
    

  ],
  providers: [OnibusService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

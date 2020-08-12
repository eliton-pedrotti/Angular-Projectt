import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/onibus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-itinerario-lotacao',
  templateUrl: './lista-itinerario-lotacao.component.html',
  styleUrls: ['./lista-itinerario-lotacao.component.css']
})
export class ListaItinerarioLotacaoComponent implements OnInit {

  //Tipo de Variável
  itinerarios : Array<any>;


  constructor(private onibusService: OnibusService, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarItinerarios();
  }
  listarItinerarios(): void{
    const id = this.actRoute.snapshot.params.id;
    this.onibusService.listarItinerario(id).subscribe(dados => this.itinerarios = dados)
  }
}

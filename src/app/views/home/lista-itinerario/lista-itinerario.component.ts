import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/onibus.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-itinerario',
  templateUrl: './lista-itinerario.component.html',
  styleUrls: ['./lista-itinerario.component.css']
})
export class ListaItinerarioComponent implements OnInit {


    //Tipo de Variável
  itinerarios : Array<any>;


  constructor(private onibusService: OnibusService, private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listarItinerario();
  }
  listarItinerario(): void{
    const id = this.actRoute.snapshot.params.id;
    this.onibusService.listarItinerario(id).subscribe(dados => this.itinerarios = dados)


  }

}

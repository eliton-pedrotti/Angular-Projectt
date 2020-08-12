import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/onibus.service';



@Component({
  selector: 'app-lista-lotacao',
  templateUrl: './lista-lotacao.component.html',
  styleUrls: ['./lista-lotacao.component.css']
})



export class ListaLotacaoComponent implements OnInit {
  
    //Tipo de Variável
  lotacao: Array<any>

  constructor(private onibusService: OnibusService) { }

  ngOnInit() {
    this.listarLotacao();
  }
  
  listarLotacao(){
      this.onibusService.listarLotacao().subscribe(onibus =>  this.lotacao = onibus);
  }
}
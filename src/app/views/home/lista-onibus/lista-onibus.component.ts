import { Component, OnInit } from '@angular/core';
import { OnibusService } from 'src/app/onibus.service';



@Component({
  selector: 'app-lista-onibus',
  templateUrl: './lista-onibus.component.html',
  styleUrls: ['./lista-onibus.component.css']
})



export class ListaOnibusComponent implements OnInit {
  

    //Tipo de Variável
  onibus: Array<any>

  constructor(private onibusService: OnibusService) { }

  ngOnInit() {
    this.listarOnibus();
  }
  
  listarOnibus(){
      this.onibusService.listarOnibus().subscribe(onibus =>  this.onibus = onibus);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnibusService {

  //Variável API
  api = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';

  //Variável Itinerários
  itinerario = 'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  constructor(private http: HttpClient) { }

 //Função Listar Ônibus
  listarOnibus() {
    return this.http.get<any[]>(`${this.api}o`);
  }


  //Função Listar Lotação
  listarLotacao() {
    return this.http.get<any[]>(`${this.api}l`);
  }


  //Função Listar Itinerários
  listarItinerario(linha_id:number){
    return this.http.get<any[]>(`${this.itinerario}${linha_id}`);
  }
} 
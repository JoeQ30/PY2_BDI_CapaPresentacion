import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HistorialUD } from '../Models/historialUD';
import { historialLlamada } from '../Models/historialLlamada';
import { detalle } from '../Models/detalle-model';
import { factura } from '../Models/factura-model';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  constructor(private httpClient: HttpClient) {}


  getData(idFactura: number): Observable<any[]> {
    return this.httpClient.get<HistorialUD[]>(('http://localhost:9000/api/telefonia'+'/listHD/'+ idFactura)).pipe(map(res => res));
  }

  getCall(idFactura: number): Observable<any[]> {
    return this.httpClient.get<historialLlamada[]>(('http://localhost:9000/api/telefonia'+'/listHL/'+ idFactura)).pipe(map(res => res));
  }

  getFacturasByPhoneNumber(phoneNumber: string): Observable<any[]> {
    return this.httpClient.get<factura[]>(('http://localhost:9000/api/telefonia'+'/listF/'+ phoneNumber)).pipe(map(res => res));
  }

  getFacturaDetail(id: number): Observable<any> {
    return this.httpClient.get<detalle[]>(('http://localhost:9000/api/telefonia'+'/listD/'+ id)).pipe(map(res => res));
  }

}

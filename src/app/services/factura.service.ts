import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  private apiUrl = 'https://api.example.com/facturas';  // Cambia esto por la URL real de tu API

  constructor(private http: HttpClient) { }

  getFacturasByPhoneNumber(phoneNumber: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?phoneNumber=${phoneNumber}`);
  }

  getFacturaDetail(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getEstadoCuentaEmpresa(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estado-cuenta-empresa`);
  }
}
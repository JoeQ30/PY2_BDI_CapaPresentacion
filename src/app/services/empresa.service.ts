import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private apiUrl = 'https://api.example.com/empresa'; // Cambia esto por la URL real de tu API

  constructor(private http: HttpClient) { }

  getEstadoCuenta(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/estado-cuenta`);
  }
}
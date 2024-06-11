import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RedireccionesService {

  constructor(private router: Router) { }

  haciaBuscarFacturas() {
    this.router.navigate(['/buscar-facturas']);
  }
  haciaDetalleFacturas() {
    this.router.navigate(['/detalle-factura']);
  }
  haciaEstadoCuentaEmpresa() {
    this.router.navigate(['/estado-cuenta-empresa']);
  }


}

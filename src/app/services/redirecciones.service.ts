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
  haciaDetalleFacturas(state?: any) {
    this.router.navigate(['/detalle-factura'], { state });
  }
  haciaEstadoCuentaEmpresa() {
    this.router.navigate(['/estado-cuenta-empresa']);
  }
  haciaMostrarFactura() {
    this.router.navigate(['/mostrar-factura'])
  }


}

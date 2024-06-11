import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { FacturaService } from '../services/factura.service';
import { RedireccionesService } from '../services/redirecciones.service';

@Component({
  selector: 'app-buscar-facturas',
  templateUrl: './buscar-facturas.component.html'
})

export class BuscarFacturasComponent {
  phoneNumber: string = '';  // Inicializar con una cadena vacía
  facturas: any[] =[];

  constructor(private facturaService: FacturaService, private redirecciones: RedireccionesService) {}

  onSubmit() {
    this.facturaService.getFacturasByPhoneNumber(this.phoneNumber).subscribe(data => {
      this.facturas = data;
    });
  }

  irDetalleFactura(): void {
    this.redirecciones.haciaDetalleFacturas();
  }
}
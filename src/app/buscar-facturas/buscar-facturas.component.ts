import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FacturaService } from '../services/factura.service';
import { RedireccionesService } from '../services/redirecciones.service';

@Component({
  selector: 'app-buscar-facturas',
  templateUrl: './buscar-facturas.component.html'
})

export class BuscarFacturasComponent {
  inNumber: string = '';  // Inicializar con una cadena vacía
  facturas: any[] =[];
  formPhoneNumber: FormGroup = new FormGroup({});

  constructor(private facturaService: FacturaService, private redirecciones: RedireccionesService) {}

  onSubmit() {
    this.formPhoneNumber = new FormGroup({
      phoneNumber: new FormControl ('', [Validators.required]) 
    })
  }

  irMostrarFactura(): void {
    this.redirecciones.haciaMostrarFactura();
  }
}
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RedireccionesService } from '../services/redirecciones.service';
import { FacturaService } from '../services/factura.service';
import { Factura } from '../models/factura';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-factura',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule],
  templateUrl: './mostrar-factura.component.html',
  styleUrl: './mostrar-factura.component.css'
})
export class MostrarFacturaComponent {
  
  listFacturas: Factura [] = [];

  constructor(private facturaService: FacturaService, private redirecciones: RedireccionesService) {}

  irDetallesFactura(id: number): void {
    this.redirecciones.haciaDetalleFacturas({ id });
  }

}

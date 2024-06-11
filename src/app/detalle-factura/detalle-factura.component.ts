import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from '../services/factura.service';
import { RedireccionesService } from '../services/redirecciones.service';

@Component({
  selector: 'app-detalle-factura',
  templateUrl: './detalle-factura.component.html'
})
export class DetalleFacturaComponent implements OnInit {
  factura: any;

  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService,
    private redirecciones: RedireccionesService
  ) {}

  

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.facturaService.getFacturaDetail(Number(id)).subscribe(data => {
      this.factura = data;
    });
  }
}
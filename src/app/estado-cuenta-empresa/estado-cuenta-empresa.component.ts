import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa.service'; // Importa el servicio correcto

@Component({
  selector: 'app-estado-cuenta-empresa',
  templateUrl: './estado-cuenta-empresa.component.html'
})
export class EstadoCuentaEmpresaComponent implements OnInit {
  estadoCuenta: any;

  constructor(private empresaService: EmpresaService) {} // Utiliza el servicio correcto

  ngOnInit(): void {
    this.empresaService.getEstadoCuenta().subscribe(data => { // Utiliza el método correcto
      this.estadoCuenta = data;
    });
  }
}
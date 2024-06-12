import { Routes } from '@angular/router';
import { BuscarFacturasComponent } from './buscar-facturas/buscar-facturas.component';
import { DetalleFacturaComponent } from './detalle-factura/detalle-factura.component';
import { EstadoCuentaEmpresaComponent } from './estado-cuenta-empresa/estado-cuenta-empresa.component';
import { MostrarFacturaComponent } from './mostrar-factura/mostrar-factura.component';

export const routes: Routes = [
  { path: 'buscar-facturas', component: BuscarFacturasComponent },
  { path: 'detalle-factura', component: DetalleFacturaComponent },
  { path: 'estado-cuenta-empresa', component: EstadoCuentaEmpresaComponent },
  { path: 'mostrar-factura', component: MostrarFacturaComponent },
  { path: '', redirectTo: '/buscar-facturas', pathMatch: 'full' }
];
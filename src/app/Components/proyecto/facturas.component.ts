import { Component, model } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { factura } from '../../Models/factura-model';
import { detalle } from '../../Models/detalle-model';
import { HistorialUD } from '../../Models/historialUD';
import { historialLlamada } from '../../Models/historialLlamada';
import { FacturasService } from '../../Services/facturas.service';

@Component({
  selector: 'app-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.scss'
})
export class FacturasComponent {


  listFacturas: factura[] = [];
  listDetalles: detalle[] = [];
  listUD: HistorialUD[] = [];
  listLL: historialLlamada[] = [];

  facturaActual = 0;

  formBuscar: FormGroup = new FormGroup({});

  constructor(private facturasService: FacturasService){}

  ngOnInit(): void{

    this.formBuscar = new FormGroup({
      
      buscar: new FormControl ('', [Validators.required])

    });

  }

  listN(){
    this.facturasService.getFacturasByPhoneNumber(this.formBuscar.get('buscar')?.value).subscribe(resp=>{
      if(resp){
        console.log(resp);  // Verifica los datos recibidos
        this.listFacturas = resp;
      }
    });
  }

  listD(){
    this.facturasService.getFacturaDetail(this.facturaActual).subscribe(resp=>{
      if(resp){
        this.listDetalles = resp;
      }
    });
  }

  listL(){
    this.facturasService.getCall(this.facturaActual).subscribe(resp=>{
      if(resp){
        this.listLL = resp;
      }
    });
  }

  listU(){
    this.facturasService.getData(this.facturaActual).subscribe(resp=>{
      if(resp){
        this.listUD = resp;
      }
    });
  }

  setFactura(id: number)
  {
    this.facturaActual = id;
    this.limpiar();
    this.listD();
  }
  limpiar()
  {
    this.listFacturas = [];
  }


}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFacturasComponent } from './buscar-facturas.component';

describe('BuscarFacturasComponent', () => {
  let component: BuscarFacturasComponent;
  let fixture: ComponentFixture<BuscarFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarFacturasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuscarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

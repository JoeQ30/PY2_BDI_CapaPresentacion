import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCuentaEmpresaComponent } from './estado-cuenta-empresa.component';

describe('EstadoCuentaEmpresaComponent', () => {
  let component: EstadoCuentaEmpresaComponent;
  let fixture: ComponentFixture<EstadoCuentaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadoCuentaEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstadoCuentaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

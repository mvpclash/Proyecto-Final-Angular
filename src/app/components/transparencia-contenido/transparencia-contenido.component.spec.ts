import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransparenciaContenidoComponent } from './transparencia-contenido.component';

describe('TransparenciaContenidoComponent', () => {
  let component: TransparenciaContenidoComponent;
  let fixture: ComponentFixture<TransparenciaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransparenciaContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparenciaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

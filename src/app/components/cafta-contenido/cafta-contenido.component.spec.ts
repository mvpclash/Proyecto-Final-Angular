import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaftaContenidoComponent } from './cafta-contenido.component';

describe('CaftaContenidoComponent', () => {
  let component: CaftaContenidoComponent;
  let fixture: ComponentFixture<CaftaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaftaContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaftaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

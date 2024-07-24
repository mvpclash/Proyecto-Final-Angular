import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaftaComponent } from './cafta.component';

describe('CaftaComponent', () => {
  let component: CaftaComponent;
  let fixture: ComponentFixture<CaftaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaftaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaftaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

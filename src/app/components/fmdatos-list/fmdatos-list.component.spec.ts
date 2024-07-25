import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmdatosListComponent } from './fmdatos-list.component';

describe('FmdatosListComponent', () => {
  let component: FmdatosListComponent;
  let fixture: ComponentFixture<FmdatosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmdatosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FmdatosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

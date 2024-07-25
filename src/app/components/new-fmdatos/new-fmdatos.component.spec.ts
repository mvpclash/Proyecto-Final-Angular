import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFmdatosComponent } from './new-fmdatos.component';

describe('NewFmdatosComponent', () => {
  let component: NewFmdatosComponent;
  let fixture: ComponentFixture<NewFmdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFmdatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFmdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

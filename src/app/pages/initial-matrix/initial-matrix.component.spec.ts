import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialMatrixComponent } from './initial-matrix.component';

describe('InitialMatrixComponent', () => {
  let component: InitialMatrixComponent;
  let fixture: ComponentFixture<InitialMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

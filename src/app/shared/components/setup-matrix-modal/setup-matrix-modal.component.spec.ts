import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupMatrixModalComponent } from './setup-matrix-modal.component';

describe('SetupMatrixModalComponent', () => {
  let component: SetupMatrixModalComponent;
  let fixture: ComponentFixture<SetupMatrixModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupMatrixModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupMatrixModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

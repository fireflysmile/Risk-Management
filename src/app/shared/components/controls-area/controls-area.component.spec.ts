import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlsAreaComponent } from './controls-area.component';

describe('ControlsAreaComponent', () => {
  let component: ControlsAreaComponent;
  let fixture: ComponentFixture<ControlsAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlsAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlsAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersInitialComponent } from './registers.component';

describe('RegistersInitialComponent', () => {
  let component: RegistersInitialComponent;
  let fixture: ComponentFixture<RegistersInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistersInitialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

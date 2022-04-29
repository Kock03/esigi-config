import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericConfigComponent } from './generic-config.component';

describe('GenericConfigComponent', () => {
  let component: GenericConfigComponent;
  let fixture: ComponentFixture<GenericConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

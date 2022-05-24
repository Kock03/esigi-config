import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityModuleRegisterComponent } from './access-security-module-register.component';

describe('AccessSecurityModuleRegisterComponent', () => {
  let component: AccessSecurityModuleRegisterComponent;
  let fixture: ComponentFixture<AccessSecurityModuleRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityModuleRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityModuleRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityModuleRegisterDialog } from './access-security-module-register.dialog';

describe('AccessSecurityModuleRegisterDialog', () => {
  let component: AccessSecurityModuleRegisterDialog;
  let fixture: ComponentFixture<AccessSecurityModuleRegisterDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityModuleRegisterDialog ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityModuleRegisterDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

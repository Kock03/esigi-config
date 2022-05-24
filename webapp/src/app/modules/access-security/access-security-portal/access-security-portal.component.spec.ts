import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityPortalComponent } from './access-security-portal.component';

describe('AccessSecurityPortalComponent', () => {
  let component: AccessSecurityPortalComponent;
  let fixture: ComponentFixture<AccessSecurityPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityProfileComponent } from './access-security-profile.component';

describe('AccessSecurityProfileComponent', () => {
  let component: AccessSecurityProfileComponent;
  let fixture: ComponentFixture<AccessSecurityProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

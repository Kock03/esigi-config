import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityProfileDialogComponent } from './access-security-profile-dialog.component';

describe('AccessSecurityProfileDialogComponent', () => {
  let component: AccessSecurityProfileDialogComponent;
  let fixture: ComponentFixture<AccessSecurityProfileDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityProfileDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

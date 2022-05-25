import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityScreensDialogComponent } from './access-security-screens-dialog.component';

describe('AccessSecurityScreensDialogComponent', () => {
  let component: AccessSecurityScreensDialogComponent;
  let fixture: ComponentFixture<AccessSecurityScreensDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityScreensDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityScreensDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

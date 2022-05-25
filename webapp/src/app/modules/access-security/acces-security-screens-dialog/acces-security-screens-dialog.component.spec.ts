import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesSecurityScreensDialogComponent } from './acces-security-screens-dialog.component';

describe('AccesSecurityScreensDialogComponent', () => {
  let component: AccesSecurityScreensDialogComponent;
  let fixture: ComponentFixture<AccesSecurityScreensDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesSecurityScreensDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesSecurityScreensDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

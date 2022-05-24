import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessSecurityScreensComponent } from './access-security-screens.component';

describe('AccessSecurityScreensComponent', () => {
  let component: AccessSecurityScreensComponent;
  let fixture: ComponentFixture<AccessSecurityScreensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessSecurityScreensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessSecurityScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDirectoryCreateComponent } from './active-directory-create.component';

describe('ActiveDirectoryCreateComponent', () => {
  let component: ActiveDirectoryCreateComponent;
  let fixture: ComponentFixture<ActiveDirectoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveDirectoryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDirectoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

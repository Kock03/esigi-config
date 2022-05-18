import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationTabComponent } from './edit-education-tab.component';

describe('EditEducationTabComponent', () => {
  let component: EditEducationTabComponent;
  let fixture: ComponentFixture<EditEducationTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEducationTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEducationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

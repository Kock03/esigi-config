import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSkillTabComponent } from './edit-skill-tab.component';

describe('EditSkillTabComponent', () => {
  let component: EditSkillTabComponent;
  let fixture: ComponentFixture<EditSkillTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSkillTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSkillTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

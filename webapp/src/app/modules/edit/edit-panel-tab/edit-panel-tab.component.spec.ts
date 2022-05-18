import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPanelTabComponent } from './edit-panel-tab.component';

describe('EditPanelTabComponent', () => {
  let component: EditPanelTabComponent;
  let fixture: ComponentFixture<EditPanelTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPanelTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPanelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

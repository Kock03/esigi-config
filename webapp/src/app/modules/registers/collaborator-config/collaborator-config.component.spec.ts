import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratorConfigComponent } from './collaborator-config.component';

describe('CollaboratorConfigComponent', () => {
  let component: CollaboratorConfigComponent;
  let fixture: ComponentFixture<CollaboratorConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaboratorConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratorConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancesConfigComponent } from './finances-config.component';

describe('FinancesConfigComponent', () => {
  let component: FinancesConfigComponent;
  let fixture: ComponentFixture<FinancesConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancesConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancesConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

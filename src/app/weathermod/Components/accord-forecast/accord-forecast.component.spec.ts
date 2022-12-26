import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordForecastComponent } from './accord-forecast.component';

describe('AccordForecastComponent', () => {
  let component: AccordForecastComponent;
  let fixture: ComponentFixture<AccordForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordForecastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

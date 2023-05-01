import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenFlightComponent } from './chosen-flight.component';

describe('ChosenFlightComponent', () => {
  let component: ChosenFlightComponent;
  let fixture: ComponentFixture<ChosenFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChosenFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChosenFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

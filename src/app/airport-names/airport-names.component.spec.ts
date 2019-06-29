import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportNamesComponent } from './airport-names.component';

describe('AirportNamesComponent', () => {
  let component: AirportNamesComponent;
  let fixture: ComponentFixture<AirportNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

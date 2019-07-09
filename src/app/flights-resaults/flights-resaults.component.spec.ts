import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsResaultsComponent } from './flights-resaults.component';

describe('FlightsResaultsComponent', () => {
  let component: FlightsResaultsComponent;
  let fixture: ComponentFixture<FlightsResaultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsResaultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsResaultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

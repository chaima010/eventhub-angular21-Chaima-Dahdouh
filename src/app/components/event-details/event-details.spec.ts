import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDetails } from './event-details';
import { provideRouter } from '@angular/router';
describe('EventDetails', () => {
  let component: EventDetails;
  let fixture: ComponentFixture<EventDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventDetails],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(EventDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

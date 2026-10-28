
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EventCard } from './event-card';

describe('EventCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCard],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(EventCard);

    fixture.componentRef.setInput('event', {
      id: 1,
      title: 'Test Angular',
      category: 'Technologie',
      date: '2026-12-25',
      place: 'Tunis',
      price: 20,
      imageUrl: 'https://example.com/event.jpg',
      description: 'Un événement de test pour Angular.'
    });

    expect(fixture.componentInstance).toBeTruthy();
  });
});

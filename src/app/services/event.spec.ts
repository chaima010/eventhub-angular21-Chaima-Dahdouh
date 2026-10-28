
import { TestBed } from '@angular/core/testing';
import { EventService } from './event';

describe('EventService', () => {
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the initial events', () => {
    expect(service.events().length).toBeGreaterThan(0);
  });

  it('should add a new event without replacing existing events', () => {
    const initialCount = service.events().length;

    service.addEvent({
      title: 'Test Angular',
      category: 'Technologie',
      date: '2026-12-25',
      place: 'Tunis',
      price: 20,
      imageUrl: 'https://example.com/event.jpg',
      description: 'Un événement de test pour Angular.'
    });

    expect(service.events().length).toBe(initialCount + 1);
    expect(service.events()[0].title).toBe('Test Angular');
  });

  it('should remove an event by its id', () => {
    const initialCount = service.events().length;
    const eventToRemove = service.events()[0];

    service.removeEvent(eventToRemove.id);

    expect(service.events().length).toBe(initialCount - 1);

    expect(
      service.events().some(event => event.id === eventToRemove.id)
    ).toBe(false);
  });

  it('should calculate the total number of events', () => {
    expect(service.totalEvents()).toBe(service.events().length);
  });

  it('should find an event by its id', () => {
    const firstEvent = service.events()[0];

    expect(service.getEventById(firstEvent.id)).toEqual(firstEvent);
  });
});

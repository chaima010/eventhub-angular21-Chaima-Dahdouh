
import { Injectable, signal, computed } from '@angular/core';
import { EventItem } from '../models/event';
import { EVENTS } from '../data/events';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private readonly _events = signal<EventItem[]>([...EVENTS]);

  readonly events = this._events.asReadonly();

  readonly totalEvents = computed(() => this._events().length);

  readonly freeEventsCount = computed(
    () => this._events().filter(event => event.price === 0).length
  );

  addEvent(event: Omit<EventItem, 'id'>): EventItem {
    const existingIds = this._events().map(item => item.id);

    const nextId = Math.max(0, ...existingIds) + 1;

    const newEvent: EventItem = {
      ...event,
      id: nextId
    };

    this._events.update(events => [newEvent, ...events]);

    return newEvent;
  }

  removeEvent(id: number): void {
    this._events.update(events =>
      events.filter(event => event.id !== id)
    );
  }

  getEventById(id: number): EventItem | undefined {
    return this._events().find(event => event.id === id);
  }
}

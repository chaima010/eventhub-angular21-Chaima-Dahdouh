
import { Component, computed, inject, signal } from '@angular/core';
import { EventItem } from '../../models/event';
import { EVENTS } from '../../data/events';
import { EventCard } from '../event-card/event-card';
import { FavoritesStore } from '../../services/favorites';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  readonly favorites = inject(FavoritesStore);
  events = signal<EventItem[]>(EVENTS);

  selectedCategory = signal('Toutes');

  categories = computed(() => [
    'Toutes',
    ...new Set(this.events().map(event => event.category))
  ]);

  filteredEvents = computed(() => {
    const category = this.selectedCategory();

    return category === 'Toutes'
      ? this.events()
      : this.events().filter(event => event.category === category);
  });
}
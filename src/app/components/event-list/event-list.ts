
import { Component, computed, signal, inject } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventItem } from '../../models/event';
import { EVENTS } from '../../data/events';
import { EventCard } from '../event-card/event-card';
import { FavoritesStore } from '../../services/favorites';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, RouterLink, EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  readonly favorites = inject(FavoritesStore);

  readonly events = signal<EventItem[]>(EVENTS);

  readonly selectedCategory = signal('Toutes');

  readonly categories = computed(() => [
    'Toutes',
    ...new Set(this.events().map(event => event.category))
  ]);

  readonly filteredEvents = computed(() => {
    const category = this.selectedCategory();

    return category === 'Toutes'
      ? this.events()
      : this.events().filter(event => event.category === category);
  });

  isFavorite(id: number): boolean {
    return this.favorites.isFavorite(id);
  }

  toggleFavorite(id: number): void {
    this.favorites.toggle(id);
  }
}

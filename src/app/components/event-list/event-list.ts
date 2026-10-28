
import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventCard } from '../event-card/event-card';
import { FavoritesStore } from '../../services/favorites';
import { EventService } from '../../services/event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [RouterLink, EventCard],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css'
})
export class EventList {
  readonly favorites = inject(FavoritesStore);
  readonly eventService = inject(EventService);

  readonly selectedCategory = signal('Toutes');
  readonly currentPage = signal(1);
  readonly pageSize = 6;

  readonly categories = computed(() => [
    'Toutes',
    ...new Set(
      this.eventService.events().map(event => event.category)
    )
  ]);

  readonly filteredEvents = computed(() => {
    const events = this.eventService.events();
    const category = this.selectedCategory();

    return category === 'Toutes'
      ? events
      : events.filter(event => event.category === category);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredEvents().length / this.pageSize))
  );

  readonly paginatedEvents = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;

    return this.filteredEvents().slice(
      start,
      start + this.pageSize
    );
  });

  readonly pageNumbers = computed(() =>
    Array.from(
      { length: this.totalPages() },
      (_, index) => index + 1
    )
  );

  changeCategory(category: string): void {
    this.selectedCategory.set(category);
    this.currentPage.set(1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  isFavorite(id: number): boolean {
    return this.favorites.isFavorite(id);
  }

  toggleFavorite(id: number): void {
    this.favorites.toggle(id);
  }

  onDeleteEvent(id: number): void {
    const confirmed = confirm(
      'Voulez-vous vraiment supprimer cet événement ?'
    );

    if (confirmed) {
      this.eventService.removeEvent(id);

      if (this.currentPage() > this.totalPages()) {
        this.currentPage.set(this.totalPages());
      }
    }
  }
}

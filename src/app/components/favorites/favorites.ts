
import { Component, computed, inject } from '@angular/core';
import { EventItem } from '../../models/event';
import { EVENTS } from '../../data/events';
import { RouterLink } from '@angular/router';
import { EventCard } from '../event-card/event-card';
import { FavoritesStore } from '../../services/favorites';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [EventCard, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {
  readonly favorites = inject(FavoritesStore);

  favoriteEvents = computed(() =>
    EVENTS.filter(event => this.favorites.ids().includes(event.id))
  );

  removeFavorite(id: number): void {
    this.favorites.remove(id);
  }
}

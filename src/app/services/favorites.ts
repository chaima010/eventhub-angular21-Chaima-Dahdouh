import { isPlatformBrowser } from '@angular/common';
import { computed, effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesStore {
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly ids = signal<number[]>(this.load());
  readonly count = computed(() => this.ids().length);

  constructor() {
    if (this.isBrowser) {
      effect(() => {
        try {
          localStorage.setItem('eventhub_favorites', JSON.stringify(this.ids()));
        } catch (error) {
          console.error('Unable to save event favorites.', error);
        }
      });
    }
  }

  isFavorite(id: number): boolean {
    return this.ids().includes(id);
  }

  toggle(id: number): void {
    this.ids.update(ids =>
      ids.includes(id) ? ids.filter(favoriteId => favoriteId !== id) : [...ids, id]
    );
  }

  remove(id: number): void {
    this.ids.update(ids => ids.filter(favoriteId => favoriteId !== id));
  }

  private load(): number[] {
    if (!this.isBrowser) {
      return [];
    }

    try {
      const saved = localStorage.getItem('eventhub_favorites');
      if (!saved) {
        return [];
      }

      const ids: unknown = JSON.parse(saved);
      if (Array.isArray(ids) && ids.every((id): id is number => Number.isInteger(id))) {
        return ids;
      }

      console.error('Stored event favorites have an invalid format.');
    } catch (error) {
      console.error('Unable to load event favorites.', error);
    }

    return [];
  }
}

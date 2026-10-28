
import { Component, input, output } from '@angular/core';
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventItem } from '../../models/event';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, UpperCasePipe, RouterLink],
  templateUrl: './event-card.html',
  styleUrl: './event-card.css'
})
export class EventCard {
  event = input.required<EventItem>();
  isFavorite = input<boolean>(false);

  favoriteToggled = output<number>();
  deleteRequested = output<number>();

  onToggle(): void {
    this.favoriteToggled.emit(this.event().id);
  }

  onDelete(): void {
    this.deleteRequested.emit(this.event().id);
  }
}

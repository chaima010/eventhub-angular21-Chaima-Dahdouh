import { Component } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventItem } from '../../models/event';
import { EVENTS } from '../../data/events';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css'
})
export class EventDetails {
  event: EventItem | undefined;

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = EVENTS.find(event => event.id === id);
  }
}
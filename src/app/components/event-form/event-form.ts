
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../services/event';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './event-form.html',
  styleUrl: './event-form.css'
})
export class EventForm {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly eventService = inject(EventService);

  readonly eventForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    category: ['', Validators.required],
    date: ['', Validators.required],
    place: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0)]],
    imageUrl: ['', [
      Validators.required,
      Validators.pattern(/^https?:\/\/.+/)
    ]],
    description: ['', [
      Validators.required,
      Validators.minLength(10)
    ]]
  });

  onSubmit(): void {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const event = this.eventForm.getRawValue();

    this.eventService.addEvent({
      title: event.title!,
      category: event.category!,
      date: event.date!,
      place: event.place!,
      price: event.price!,
      imageUrl: event.imageUrl!,
      description: event.description!
    });

    alert('Événement ajouté avec succès !');

    this.router.navigate(['/events']);
  }
}


import { Routes } from '@angular/router';

import { EventList } from './components/event-list/event-list';
import { EventDetails } from './components/event-details/event-details';
import { EventForm } from './components/event-form/event-form';
import { Favorites } from './components/favorites/favorites';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  // Redirection vers la liste des événements
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },

  // Liste des événements
  {
    path: 'events',
    component: EventList
  },

  // Formulaire de création : doit être avant events/:id
  {
    path: 'events/add',
    component: EventForm
  },

  // Détails d'un événement
  {
    path: 'events/:id',
    component: EventDetails
  },

  // Page À propos chargée à la demande
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about').then(m => m.About)
  },

  // Liste des favoris
  {
    path: 'favorites',
    component: Favorites
  },

  // Page pour les URL inconnues
  {
    path: '**',
    component: NotFound
  }
];

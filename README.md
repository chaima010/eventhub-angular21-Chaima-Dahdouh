# EventHub — Plateforme de gestion d’événements

## 1. Présentation du projet

EventHub est une application web développée avec Angular permettant de consulter et de gérer des événements. Elle offre une interface intuitive et responsive pour parcourir les événements, consulter leurs détails, ajouter de nouveaux événements et gérer une liste de favoris.

## 2. Fonctionnalités principales

- **Liste des événements :** affichage des événements sous forme de cartes.
- **Détails d’un événement :** consultation des informations détaillées de chaque événement.
- **Filtrage par catégorie :** affichage des événements selon la catégorie sélectionnée.
- **Gestion des favoris :** ajout et retrait d’événements des favoris.
- **Ajout d’événements :** formulaire réactif avec validation des champs.
- **Suppression d’événements :** suppression après confirmation de l’utilisateur.
- **Pagination :** affichage des événements par pages, avec un maximum de six événements par page.
- **Navigation :** accès aux différentes pages grâce au routage Angular.
- **Page À propos :** présentation du projet.
- **Page introuvable :** gestion des URL non reconnues.
- **Interface responsive :** adaptation de l’affichage aux ordinateurs, tablettes et téléphones.

## 3. Technologies utilisées

- **Angular** : développement de l’interface utilisateur.
- **TypeScript** : logique applicative et typage.
- **HTML** : structure des pages.
- **CSS** : mise en forme et adaptation responsive.
- **Angular Router** : navigation entre les pages.
- **Reactive Forms** : création et validation du formulaire d’ajout.
- **Signals et Computed Signals** : gestion réactive des données.
- **Vitest** : exécution des tests unitaires.
- **Git et GitHub** : gestion des versions et hébergement du code source.

## 4. Installation et lancement

### Prérequis

- Node.js et npm.
- Angular CLI.
- Visual Studio Code, ou un autre éditeur compatible.

### Étapes

1. Cloner le dépôt GitHub :

   ```bash
   git clone URL_DU_DEPOT
   ```

2. Accéder au dossier du projet :

   ```bash
   cd eventhub-ChaimaDahdouh
   ```

3. Installer les dépendances :

   ```bash
   npm install
   ```

4. Lancer l’application :

   ```bash
   ng serve
   ```

5. Ouvrir le navigateur à l’adresse :

   `http://localhost:4200`

## 5. Exécution des tests

Pour exécuter les tests unitaires sans mode surveillance :

```bash
ng test --watch=false
```

Les tests vérifient notamment la création des composants et le fonctionnement du service de gestion des événements.

**Résultat obtenu :** 16 tests réussis sur 16, répartis sur 11 fichiers de test.

## 6. Structure générale du projet

```text
src/
└── app/
    ├── components/
    │   ├── about/
    │   ├── event-card/
    │   ├── event-detail/
    │   ├── event-details/
    │   ├── event-form/
    │   ├── event-list/
    │   ├── favorites/
    │   ├── header/
    │   └── not-found/
    ├── data/
    ├── models/
    ├── services/
    ├── app.config.ts
    ├── app.routes.ts
    └── app.ts
```

## 7. Auteur

- **Auteur :** Chaima Dahdouh
- **Formation :** À compléter avec l’intitulé exact de la formation.

## 8. Conclusion

EventHub met en pratique les concepts essentiels d’Angular, notamment les composants standalone, le routage, les formulaires réactifs, les Signals, les services partagés et les tests unitaires. Le projet permet de gérer les principales interactions d’une plateforme de consultation d’événements.

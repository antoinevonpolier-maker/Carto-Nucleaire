# Cartographie commerciale du nucléaire

Application web statique React + TypeScript + Vite conçue comme outil de prospection commerciale pour lire l'écosystème nucléaire français : grands projets, donneurs d'ordre, MOA, AMO/MOE, intégrateurs, fournisseurs, sous-traitants, spécialités métiers, comptes prioritaires, opportunités et plan de charge.

## Fonctionnalités

- Cartographie interactive en mode **pieuvre** : domaine central, projets, acteurs reliés et spécialités du projet sélectionné.
- Filtres par domaine, type d'acteur, projet, compétence, niveau d'opportunité, priorité commerciale et horizon de charge.
- Recherche rapide sur les entreprises, projets et compétences.
- Fiches détaillées projet et acteur avec export JSON et copie d'un résumé commercial.
- Vue **Comptes majeurs** : Air Liquide, Framatome, TotalEnergies, Equans, EDF, Orano, CEA, Naval Group, TechnicAtome, Assystem, Egis, Tractebel, Dalkia, Veolia, Vinci, Bouygues, Spie, Onet Technologies, Altrad Endel.
- Vue **Plan de charge** : projets lancés, planifiés, long terme, sensibles ou peu documentés.
- Vue **Opportunités commerciales** par compétence : génie civil, HVAC, tuyauterie, électricité, contrôle commande, automatisme, PMO, sûreté, radioprotection, logistique, robotique, démantèlement, maintenance, procédés, déchets, combustible, turbines, levage, équipements mécaniques.
- Onglet **Données** pour vérifier toutes les données embarquées.

## Données

Les données métier sont embarquées côté front dans :

```txt
src/data/nuclearMapping.ts
```

Ce fichier contient :

- `domains` : grandes familles de la cartographie ;
- `projects` : projets et relations acteurs/rôles ;
- `actors` : fiches entreprises et institutions ;
- `majorAccounts` : comptes prioritaires demandés ;
- `commercialOpportunities` : matrice compétence → projets → acteurs → angles commerciaux ;
- `loadPlan` : plan de charge qualitatif ;
- `commercialContext` : notes issues de la consigne commerciale.

Les informations inconnues ou sensibles sont explicitement marquées : `Non précisé dans les documents` ou `Information limitée / secret défense`.

## Installation locale

```bash
npm install
npm run dev
```

Puis ouvrir l'URL indiquée par Vite, généralement :

```txt
http://localhost:5173
```

## Build de production

```bash
npm run build
```

Le build statique est généré dans :

```txt
dist/
```

Prévisualisation locale :

```bash
npm run preview
```

## Déploiement GitHub Pages

1. Créer un dépôt GitHub, par exemple `nuclear-commercial-map`.
2. Pousser le projet dans le dépôt.
3. Installer les dépendances :

```bash
npm install
```

4. Déployer avec :

```bash
GITHUB_PAGES=true VITE_REPOSITORY_NAME=nuclear-commercial-map npm run deploy
```

La configuration `vite.config.ts` règle automatiquement la propriété `base` pour GitHub Pages quand `GITHUB_PAGES=true`.

## Scripts disponibles

```bash
npm run dev       # serveur local de développement
npm run build     # compilation TypeScript + build Vite
npm run preview   # prévisualisation du build
npm run deploy    # build + publication du dossier dist avec gh-pages
```

## Arborescence

```txt
nuclear-commercial-map/
├── package.json
├── vite.config.ts
├── index.html
├── README.md
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── postcss.config.js
├── tailwind.config.js
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── utils.ts
    ├── data/
    │   └── nuclearMapping.ts
    ├── types/
    │   └── mapping.ts
    └── components/
        ├── Header.tsx
        ├── Sidebar.tsx
        ├── Filters.tsx
        ├── SearchBar.tsx
        ├── InteractiveMap.tsx
        ├── ProjectCard.tsx
        ├── ActorCard.tsx
        ├── OpportunityPanel.tsx
        ├── AccountZoom.tsx
        └── Legend.tsx
```

## Données intégrées et traçabilité

La version corrigée respecte la contrainte suivante : aucune information issue des deux PDF n'est laissée uniquement hors de l'application.

Dans l'onglet **Données**, l'application affiche maintenant :
- les données structurées de cartographie : domaines, projets, acteurs, relations, compétences, comptes majeurs, opportunités et plan de charge ;
- une table **Données source exhaustives et traçabilité** avec les informations extraites, reliées aux projets, acteurs et compétences quand c'est possible ;
- le **texte source complet intégré** page par page pour `Carto nuc. consigne.pdf` et `Cartographie nucléaire.pdf`.

Les informations sensibles ou non détaillées dans les documents sont conservées avec les libellés `Non précisé dans les documents` ou `Information limitée / secret défense`.
